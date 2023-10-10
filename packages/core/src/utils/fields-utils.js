/* global i18n */
/* eslint-disable no-underscore-dangle */
import {
  getValue, isValidExpression,
} from './form-utils';

/**
 * Pre-Processing for rendering a field
 */
export const FieldPreProcessing = (data, path, isReadOnly, webcomp, context) => {
  if (data.config.visibility === false) return null;
  let isDeclarativeTarget = false;
  data.config.displayvalue = '';
  data.config.displaylabel = i18n.t(data.config.label);
  data.config.displayplaceholder = i18n.t(data.config.placeholder);
  data.config.displayhelperText = i18n.t(data.config.helperText);
  data.config.displaycaption = i18n.t(data.config.caption);
  if (data.config.value) {
    let propName = data.config.value.replace('@P .', '').replace('@USER .', '');
    data.config.reference = ((typeof context === 'undefined' || context === '') ? propName : `${context}.${propName}`);
    data.config.displayvalue = getValue(webcomp.casedata.content, data.config.reference);
    if (typeof data.config.datasource === 'string' && data.config.datasource.indexOf('@ASSOCIATED') === 0) {
      propName = data.config.datasource.replace('@ASSOCIATED .', '');
      if (propName.indexOf('.') !== -1) {
        propName = propName.substring(propName.lastIndexOf('.') + 1);
      }
      let val = '';
      if (webcomp.data.context_data) {
        val = webcomp.data.context_data.content;
      } else if (webcomp.data.uiResources.context_data && webcomp.data.uiResources.context_data.caseInfo &&
        webcomp.data.uiResources.context_data.caseInfo.content) {
        val = webcomp.data.uiResources.context_data.caseInfo.content;
      }
      const obj = (context === '' ? val : getValue(val, context));
      if (obj) {
        data.config.options = obj.summary_of_associated_lists__[propName];
      }
      if (typeof data.config.options === 'undefined') {
        val = webcomp.data.uiResources.resources.fields[propName];
        if (Array.isArray(val) && val.length === 1) {
          val = val[0];
        }
        if (val && val.datasource) {
          if (val.datasource.records) {
            data.config.options = val.datasource.records;
          } else if (val.datasource.name && webcomp.data.data.shared[val.datasource.name]) {
            const dp = webcomp.data.data.shared[val.datasource.name];
            if (Object.keys(dp).length > 0) {
              const dpName = Object.keys(dp)[0];
              if (dp[dpName].pxResults) {
                const keyName = val.datasource.propertyForValue.replace('@P .', '');
                const valueName = val.datasource.propertyForDisplayText.replace('@P .', '');
                data.config.options = [];
                for (const item in dp[dpName].pxResults) {
                  const elem = dp[dpName].pxResults[item];
                  data.config.options[item] = { key: elem[keyName], value: elem[valueName] };
                }
              }
            }
          }
        }
      }
    } else if (typeof data.config.datasource === 'object' && data.config.datasource.source && data.config.datasource.source.indexOf('@DATASOURCE') === 0) {
      const ref = data.config.datasource.source.replace('@DATASOURCE ', '').replace('.pxResults', '');
      if (webcomp.data.data[ref] && webcomp.data.data[ref].pxResults) {
        data.config.options = webcomp.data.data[ref].pxResults;
      } else if (webcomp.data.uiResources.context_data && webcomp.data.uiResources.context_data.caseInfo &&
        webcomp.data.uiResources.context_data.caseInfo.content) {
        const val = webcomp.data.uiResources.context_data.caseInfo.content;
        if (val[context] && val[context].summary_of_lists__[ref] && val[context].summary_of_lists__[ref].pxResults) {
          const paramDP = val[context].summary_of_lists__[ref].pxResults.replace('.pxResults', '');
          if (webcomp.data.data[paramDP] && webcomp.data.data[paramDP].pxResults) {
            data.config.options = [];
            const keyName = data.config.datasource.fields.key.replace('@P .', '');
            const valueName = data.config.datasource.fields.text.replace('@P .', '');
            for (const item in webcomp.data.data[paramDP].pxResults) {
              const elem = webcomp.data.data[paramDP].pxResults[item];
              data.config.options[item] = { key: elem[keyName], value: elem[valueName] };
            }
          }
        }
      }
    }
    if (!data.config.options) {
      data.config.options = [];
    }
    if (!data.config.displayvalue) {
      data.config.displayvalue = '';
    } else if (typeof data.config.displayvalue !== 'object') {
      data.config.displayvalue = `${data.config.displayvalue}`;
    }
    if (webcomp.data.uiResources && webcomp.data.uiResources.resources && webcomp.data.uiResources.resources.fields &&
      webcomp.data.uiResources.resources.fields[propName]) {
      let propVal = webcomp.data.uiResources.resources.fields[propName];
      if (Array.isArray(propVal) && propVal.length === 1) {
        propVal = propVal[0];
      }
      if (propVal.isDeclarativeTarget || propVal.isSpecial) {
        isDeclarativeTarget = true;
        webcomp.isDeclarativeTarget = true;
      }
    }
  }
  if (typeof data.config.visibility === 'string' || typeof data.config.readOnly === 'string' ||
  typeof data.config.disabled === 'string' || typeof data.config.required === 'string') {
    webcomp.refreshOnChange = true;
  }
  const content = webcomp.data.data.caseInfo.content;

  /* Visibility condition */
  if (typeof data.config.visibility === 'string' && data.config.visibility !== 'true') {
    if (data.config.visibility.startsWith('@W ')) {
      webcomp.isDeclarativeTarget = true;
    }
    if (!isValidExpression(data.config.visibility, content, webcomp, context)) return null;
  } else if (data.config.visibility === false || data.config.visibility === 'false') {
    return null;
  }
  /* Read-only condition */
  data.config.readonlystate = false;
  if (typeof data.config.readOnly === 'string' && data.config.readOnly !== 'false') {
    data.config.readonlystate = isValidExpression(data.config.readOnly, content, webcomp, context);
  } else if (data.config.readOnly === true || data.config.readOnly === 'true' || isDeclarativeTarget) {
    data.config.readonlystate = true;
  }
  /* Required condition */
  data.config.requiredstate = false;
  if (typeof data.config.required === 'string' && data.config.required !== 'false') {
    data.config.requiredstate = isValidExpression(data.config.required, content, webcomp, context);
  } else if (data.config.required === true || data.config.required === 'true') {
    data.config.requiredstate = true;
  }
  /* Disabled condition */
  data.config.disabledstate = false;
  if (typeof data.config.disabled === 'string' && data.config.disabled !== 'false') {
    data.config.disabledstate = isValidExpression(data.config.disabled, content, webcomp, context);
  } else if (data.config.disabled === true || data.config.disabled === 'true') {
    data.config.disabledstate = true;
  }
  if (data.config.disabledstate) {
    data.config.requiredstate = false;
    data.config.readonlystate = false;
  }
  return 'OK';
};
