/* eslint-disable no-self-compare */

/**
 * always make sure that the return value is a string with 2 digits - prepend 0 in front
 */
export const pad2char = (v) => `0${v}`.slice(-2);

/**
 * Generate unique id for elements
 */
export const createUID = () => `${Math.random()
  .toString(36)
  .substr(2, 9)}`;

/**
 * convert a timestamp like '20200210T170100.650 GMT' into a valid Date object
 */
export const convertTimestampToDate = (v) => {
  if (v.endsWith(' GMT') && v.length === 23) {
    return new Date(`${v.substring(0, 4)}-${v.substring(4, 6)}-${v.substring(6, 8)}T${v.substring(9, 11)}:${v.substring(11, 13)}:${v.substring(13, 19)}Z`);
  }
  if (v.length === 8) {
    let dt = new Date(`${v.substring(0, 4)}-${v.substring(4, 6)}-${v.substring(6, 8)}T00:00:00.000Z`);
    dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
    return dt;
  }
  if (v.length === 10) { // Convert MM/DD/YYYY
    let dt = new Date(`${v.substring(6, 10)}-${v.substring(0, 2)}-${v.substring(3, 5)}T00:00:00.000Z`);
    dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
    return dt;
  }
  return null;
};
/**
 * escape and unescape the HTML entities
 */
export const escapeHTML = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(
    /[&<>'"]/g,
    (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '(': '&#40;',
      ')': '&#41;',
      '"': '&quot;',
    }[tag] || tag),
  );
};

export const unescapeHTML = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(
    /&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,
    (tag) => ({
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&#39;': "'",
      '&#40;': '(',
      '&#41;': ')',
      '&quot;': '"',
    }[tag] || tag),
  );
};

/**
 * set the value of a property in an obj targeted by the path like 'props(1).pyLabel'
 */
export const setObjectFromRef = (root, path, value) => {
  if (typeof path !== 'string') {
    return;
  }
  const keys = path.split('.');
  let retObj = root;
  for (const i in keys) {
    let el = keys[i];
    const startParens = el.indexOf('(');
    if (startParens === -1) {
      // regular property - just add it to retObj
      if (i < keys.length - 1) {
        if (typeof retObj[el] === 'undefined') {
          retObj[el] = {};
        }
      } else {
        retObj[el] = value;
      }
      retObj = retObj[el];
    } else {
      const idx = el.substring(startParens + 1, el.length - 1);
      el = el.substring(0, startParens);
      if (typeof retObj[el] === 'undefined') {
        retObj[el] = [];
      }
      for (let j = retObj[el].length; j < idx; j++) {
        retObj[el].push({});
      }
      retObj = retObj[el][idx - 1];
    }
  }
};

/**
 * get the value targeted by path - path can be a complex string like 'props(1).pyLabel'
 * Note that path is using 1 as the starting index
 */
export const getValue = (obj, path) => {
  if (typeof path !== 'string') {
    return null;
  }
  let retObj = obj;
  const keys = path.split('.');
  for (const i in keys) {
    const key = keys[i];
    const startParens = key.indexOf('(');
    if (startParens === -1) {
      if (typeof retObj[key] !== 'undefined') {
        retObj = retObj[key];
      } else {
        return null;
      }
    } else {
      const idx = key.substring(startParens + 1, key.length - 1);
      const el = retObj[key.substring(0, startParens)];
      if (el && Array.isArray(el) && el.length >= idx) {
        retObj = el[idx - 1];
      } else {
        return null;
      }
    }
  }
  return retObj;
};

/**
 * Clear the value of all the string type properties in the object
 */
export const clearProps = (obj) => {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      clearProps(obj[prop]);
    } else if (typeof obj[prop] === 'string') {
      obj[prop] = '';
    }
  }
};

/**
 * Parse the structure of groups, layout to find all the fields that have a fieldID property - add the property to the array list
 */
export const getNewRowProps = (obj, value) => {
  for (const prop in obj) {
    if (prop === 'fieldID') {
      value.push(obj.fieldID);
    } else {
      const el = obj[prop];
      if (el.fieldID) {
        value.push(el.fieldID);
      } else if (typeof el === 'object') {
        getNewRowProps(el, value);
      }
    }
  }
};

/**
 * Add a new row to a page list - it will use the properties of the 1st row of the object to create the new row
 * root is the object that contains all the data
 * path is the path of the pagelist inside the object
 * if newrowlist is not null, it is a string of properties comma separated
 */
export const addRowToPageList = (root, path, newrowlist) => {
  let el = getValue(root, path);
  if (el === null) {
    el = [];
    setObjectFromRef(root, path, el);
  }
  if (!Array.isArray(el)) return;
  if (newrowlist && typeof newrowlist === 'string') {
    const newRow = {};
    const keys = newrowlist.split(',');
    for (const i in keys) {
      newRow[keys[i]] = '';
    }
    el.push(newRow);
  } else {
    /* if newrow is not provided - we take the data from the first row */
    if (el.length === 0) return;
    const newRow = { ...el[0] };
    clearProps(newRow);
    el.push(newRow);
  }
};

/**
 * Delete a row from a page list - the index of the row is contained in the path .prop1(yy).prop2(xx).pyTemplateButton
 */
export const deleteRowFromPageList = (root, path) => {
  let arrayPath = path;
  let deleteIndex;
  if (path.indexOf(').pyTemplate') !== -1) {
    deleteIndex = arrayPath.substring(path.lastIndexOf('(') + 1, path.lastIndexOf(')'));
    arrayPath = arrayPath.substring(0, path.lastIndexOf('('));
  }
  const el = getValue(root, arrayPath);
  if (!Array.isArray(el)) return;
  if (el.length === 1) {
    for (const i in el[0]) {
      if (i !== 'pxObjClass') el[0][i] = '';
    }
    return;
  }
  if (deleteIndex) {
    if (el.length < deleteIndex) return;
    el.splice(deleteIndex - 1, 1);
  } else {
    el.length -= 1;
  }
};

/**
 * Returns a bool that indicates if the DOMElement el has an action that trigger either a postValue or Refresh
 *  The argument actionType can either take the values of 'click' or 'change'
 */
export const shouldRefresh = (el, actionType) => {
  const action = el.getAttribute(`data-action-${actionType}`);
  if (action && (action === 'postValue' || action.indexOf('refresh') === 0)) {
    return true;
  }
  return false;
};

/**
 * Returns the refreshFor value
 *  The argument actionType can either take the values of 'click' or 'change'
 */
export const getRefreshFor = (el, actionType) => {
  const action = el.getAttribute(`data-action-${actionType}`);
  if (action && action.indexOf('refresh') === 0) {
    return action.replace('refresh-', '');
  }
  return '';
};

function compare(post, operator, value) {
  try {
    switch (operator) {
      case '>': return parseInt(post, 10) > parseInt(value, 10);
      case '<': return parseInt(post, 10) < parseInt(value, 10);
      case '>=': return parseInt(post, 10) >= parseInt(value, 10);
      case '<=': return parseInt(post, 10) <= parseInt(value, 10);
        // eslint-disable-next-line eqeqeq
      case '==': return `${post}` == `${value}`;
        // eslint-disable-next-line eqeqeq
      case '!=': return `${post}` != `${value}`;
    }
  // eslint-disable-next-line no-empty
  } catch (e) {}
  return false;
}

/**
 * Check if the condition is true - INCOMPLETE - does not handle all use cases like OR and AND
 *
 */
export const isValidExpression = (expression, content) => {
  const exprs = expression.replace('@E ', '').split('&&');
  for (const expr in exprs) {
    const ops = exprs[expr].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);
    if (ops.length === 3) {
      const val = content[ops[0].substring(1)];
      if (typeof val !== 'undefined') {
        if (!compare(val, ops[1], ops[2].replace(/^'|'$/g, ''))) {
          return false;
        }
      }
    }
  }
  return true;
};

/**
 * Apply the visibility conditions - Work in progress not used currently - instead do refresh
 */
export const applyVisibleToForm = (form, content) => {
  const els = form.querySelectorAll('[data-visibility]');
  for (let i = 0; i < els.length; i++) {
    const expression = els[i].getAttribute('data-visibility');
    if (expression !== null) {
      if (isValidExpression(expression, content)) {
        els[i].style = 'display:none';
      } else {
        els[i].style = '';
      }
    }
  }
};

/**
 * Retrieve the values of all the form controls in the form and populate them in the content object
 */
export const getFormData = (form, content) => {
  for (const el of form.elements) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      const ref = el.getAttribute('data-ref');
      if (ref !== null && ref !== 'pyID') {
        if (el.tagName === 'INPUT') {
          const type = el.getAttribute('type');
          if (type === 'checkbox') {
            setObjectFromRef(content, ref, el.checked);
          } else if (type === 'radio') {
            if (el.checked) {
              setObjectFromRef(content, ref, el.value);
            }
          } else if (type === 'tel') {
            let value = el.value;
            if (el.parentNode.firstElementChild.tagName === 'SELECT' && el.parentNode.firstElementChild.className === 'field-countrycode') {
              value = el.parentNode.firstElementChild.value + value;
            }
            setObjectFromRef(content, ref, value);
          } else if (type === 'date') {
            let dt;
            if (el.valueAsDate) {
              dt = new Date(el.valueAsDate);
            }
            if (!dt || !(dt instanceof Date) || dt.getTime() !== dt.getTime()) {
              dt = new Date(el.value);
            }
            if (dt && dt instanceof Date && dt.getTime() === dt.getTime()) {
              dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
              setObjectFromRef(content, ref, `${pad2char(dt.getMonth() + 1)}/${pad2char(dt.getDate())}/${dt.getFullYear()}`);
            } else {
              setObjectFromRef(content, ref, el.value);
            }
          } else {
            setObjectFromRef(content, ref, el.value);
          }
        } else {
          setObjectFromRef(content, ref, el.value);
        }
      }
    }
  }
  if (form && form.querySelectorAll) {
    const editableElems = form.querySelectorAll('[contenteditable]');
    for (let i = 0; i < editableElems.length; i++) {
      const el = editableElems[i];
      const ref = el.getAttribute('data-ref');
      setObjectFromRef(content, ref, escapeHTML(el.innerHTML));
    }
  }
};

/**
 * Retrieve the values of all the form controls in the form and populate them in the content object
 */
export const setFormData = (form, content) => {
  for (const el of form.elements) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      const ref = el.getAttribute('data-ref');
      if (ref !== null && ref !== 'pyID' && content[ref]) {
        const myobj = content[ref];
        if (typeof myobj === 'object') {
          if (el.type === 'radio') {
            if (el.value === myobj.value) el.checked = true;
          } else if (el.type === 'checkbox') {
            if (myobj.value === true || myobj.value === 'true') el.checked = true;
          } else if (myobj.value) {
            el.value = myobj.value;
          }
          if (myobj.disabled) el.disabled = true;
        } else if (el.type === 'datetime-local') {
          if (myobj.length === 24) {
            el.value = myobj.substring(0, 23);
          } else {
            el.value = myobj;
          }
        } else if (el.type === 'date') {
          let dt;
          if (el.valueAsDate) {
            dt = new Date(el.valueAsDate);
          }
          if (!dt || !(dt instanceof Date) || dt.getTime() !== dt.getTime()) {
            dt = new Date(el.value);
          }
          if (dt && dt instanceof Date && dt.getTime() === dt.getTime()) {
            dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
            setObjectFromRef(content, ref, `${pad2char(dt.getMonth() + 1)}/${pad2char(dt.getDate())}/${dt.getFullYear()}`);
          } else {
            setObjectFromRef(content, ref, el.value);
          }
        } else if (typeof myobj === 'string') {
          if (el.type === 'radio') {
            if (el.value === myobj) el.checked = true;
          } else if (el.type === 'checkbox') {
            if (myobj === 'true') el.checked = true;
          } else {
            el.value = myobj;
          }
        } else if (typeof myobj === 'boolean' && el.type === 'checkbox') {
          if (myobj === true) el.checked = true;
        } else {
          el.value = myobj;
        }
      }
    }
  }
};

/**
 * Retrieve the content of init data
 */
export const getInitData = (casedata) => {
  if (typeof casedata.content === 'undefined') return {};
  const content = {};
  for (const i in casedata.content) {
    const el = casedata.content[i];
    if (typeof el === 'object' && i.indexOf('px') !== 0 && !Array.isArray(el) && i !== 'pyWorkParty') {
      content[i] = el;
    }
  }
  return content;
};

/* set an error on every form fields */
export const setFormInlineError = (form, errorMsg) => {
  for (const el of form.elements) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      const ref = `.${el.getAttribute('data-ref')}`;
      if (ref !== null && ref !== 'pyID') {
        for (const err in errorMsg) {
          if (errorMsg[err].Path === ref) {
            el.setCustomValidity(unescapeHTML(errorMsg[err].ValidationMessage));
            el.classList.add('error-field');
            el.reportValidity();
            break;
          }
          if (errorMsg[err].erroneousInputOutputFieldInPage === ref) {
            el.setCustomValidity(unescapeHTML(errorMsg[err].localizedValue));
            el.classList.add('error-field');
            el.reportValidity();
            break;
          }
        }
      }
    }
  }
};
