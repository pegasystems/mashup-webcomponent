/* Pass an empty msg to reset the error, otherwise set the error inline */
export const setInlineError = (el, msg) => {
  const groupEl = el.closest('.fr-input-group');
  if (!groupEl) {
    return;
  }
  const ref = el.getAttribute('data-ref');
  const errorElem = el.nextElementSibling;
  if (ref !== null && ref !== 'pyID' && msg !== '') {
    if (errorElem && errorElem.className === 'fr-error-text') {
      errorElem.innerText = msg;
    } else {
      const errorNode = document.createElement('p');
      errorNode.id = `text-input-error-desc-error-${ref}`;
      errorNode.className = 'fr-error-text';
      errorNode.innerText = msg;
      groupEl.appendChild(errorNode);
      groupEl.classList.add('fr-input-group--error');
      el.classList.add('fr-input--error');
      el.setAttribute('aria-describedby', `text-input-error-desc-error-${ref}`);
    }
  } else {
    if (errorElem && errorElem.className === 'fr-error-text') {
      groupEl.removeChild(errorElem);
    }
    groupEl.classList.remove('fr-input-group--error');
    el.classList.remove('fr-input--error');
    el.setAttribute('aria-describedby', '');
  }
};

export const validateForm = (form) => {
  for (const el of form.elements) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      setInlineError(el, '');
    }
  }
  return form.checkValidity();
};

export const reportFormValidity = (form) => {
  for (const el of form.elements) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      setInlineError(el, el.validationMessage);
    }
  }
};
