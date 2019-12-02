/* eslint-disable no-self-compare */

/**
 * always make sure that the return value is a string with 2 digits - prepend 0 in front
 */
const pad2char = v => `0${v}`.slice(-2);

const convertTimestampToDate = (v) => {
  if (v.endsWith(' GMT') && v.length === 23) {
    return new Date(`${v.substring(0, 4)}-${v.substring(4, 6)}-${v.substring(6, 8)}T${v.substring(9, 11)}:${v.substring(11, 13)}:${v.substring(13, 19)}Z`);
  }
  return null;
};
/**
 * escape and unescape the HTML entities
 */
const escapeHTML = str => str.replace(
  /[&<>'"]/g,
  tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[tag] || tag),
);

const unescapeHTML = str => str.replace(
  /&amp;|&lt;|&gt;|&#39;|&quot;/g,
  tag => ({
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#39;': "'",
    '&quot;': '"',
  }[tag] || tag),
);

/**
 * set the value of a property in an obj targeted by the path
 */
const setObjectFromRef = (root, path, value) => {
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
 * get the value targeted by path - path can be a complex string like .props(1).pyLabel
 * Note that path is using 1 as the starting index
 */
const getValue = (obj, path) => {
  if (typeof path !== 'string') {
    return null;
  }
  let retObj = obj;
  const keys = path.split('.');
  for (const i in keys) {
    const key = keys[i];
    const startParens = key.indexOf('(');
    if (startParens === -1) {
      if (retObj[key]) {
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
const clearProps = (obj) => {
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
const getNewRowProps = (obj, value) => {
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
const addRowToPageList = (root, path, newrowlist) => {
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
    const newRow = Object.assign({}, el[0]);
    clearProps(newRow);
    el.push(newRow);
  }
};

/**
 * Delete a row from a page list - the index of the row is contained in the path .prop1(yy).prop2(xx).pyTemplateButton
 */
const deleteRowFromPageList = (root, path) => {
  let arrayPath = path;
  let deleteIndex;
  if (path.indexOf(').pyTemplate') !== -1) {
    deleteIndex = arrayPath.substring(path.lastIndexOf('(') + 1, path.lastIndexOf(')'));
    arrayPath = arrayPath.substring(0, path.lastIndexOf('('));
  }
  const el = getValue(root, arrayPath);
  if (!Array.isArray(el)) return;
  if (el.length === 1) return;
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
const shouldRefresh = (el, actionType) => {
  const action = el.getAttribute(`data-action-${actionType}`);
  if (action && (action === 'postValue' || action === 'refresh')) {
    return true;
  }
  return false;
};

/**
 * Retrieve the values of all the form controls in the form and populate them in the content object
 */
const getFormData = (form, content) => {
  for (const i in form.elements) {
    const el = form.elements[i];
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
};

export {
  pad2char,
  convertTimestampToDate,
  setObjectFromRef,
  getValue,
  addRowToPageList,
  clearProps,
  shouldRefresh,
  getFormData,
  deleteRowFromPageList,
  getNewRowProps,
  escapeHTML,
  unescapeHTML,
};
