import { html } from 'lit-html';

export const viewStyle = () => html`
  <style>
    label {
      color: var(--generalLabelColor);
      padding-bottom: 3px;
    }
    .field-item > label {
      padding-bottom: var(--spacing1x);
    }
    h1 {
      font-size: var(--text-xxl);
    }
    h2 {
      font-size: var(--text-xl);
    }
    h3 {
      font-size: var(--text-l);
    }
    h4 {
      font-size: var(--text-m);
    }
    h5 {
      font-size: var(--text-s);
    }
    h6 {
      font-size: var(--text-xs);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--generalTextColor);
    }

    input[type='text'] {
      overflow: hidden;
      border: 1px solid transparent;
      border-bottom-color: #e5e6e9;
      font-size: var(--generalTextFontSize);
      color: var(--generalTextColor);
      font-weight: normal;
      text-align: left;
      background-color: transparent;
      display: block;
      width: 100%;
      outline: 0;
      padding: var(--spacing05x) var(--spacing1x) 0 var(--spacing1x);
      height: var(--controlHeight);
    }

    input[type='text']:hover,
    input[type='text']:active,
    input[type='text']:focus {
      outline: 0;
      border-bottom: 1px solid var(--primaryColor);
    }

    .field-textinput {
      margin: var(--spacing2x) 0 var(--spacing1x) 0;
      position: relative;
      display: flex;
    }

    .field-textinput > label {
      position: absolute;
      top: 0;
      left: var(--spacing1x);
      transition: all 0.3s ease;
      padding: 0;
      margin: 14px 0 0 0;
      pointer-events: none;
      font-size: var(--generalTextFontSize);
      color: var(--generalLabelColor);
    }

    .field-textinput > input:focus,
    .field-textinput > input:hover,
    .field-textinput > input:active,
    .field-textinput > input {
      transition: all 0.3s linear;
    }

    .field-textinput > input::placeholder {
      color: transparent;
      font-size: 0;
    }

    .field-textinput > input:active + label,
    .field-textinput > input:focus + label,
    .field-textinput > input:not(:placeholder-shown) + label {
      font-size: 75%;
      transform: translate3d(0, -100%, 0);
      margin-top: var(--spacing1x);
    }

    textarea {
      overflow: hidden;
      border: solid #e5e6e9 1px;
      margin: 1px 0px;
      background-image: none;
      background-color: #fff;
      font-family: OpenSans, sans-serif;
      font-size: var(--generalTextFontSize);
      color: var(--generalTextColor);
      font-weight: normal;
      text-align: left;
      background-color: transparent;
      display: block;
      tab-size: 4;
      width: 100%;
      border: 1px solid #ccc;
      outline: 0;
    }

    textarea:hover,
    textarea:active,
    textarea:focus {
      outline: 0;
      border-bottom: 1px solid var(--primaryColor);
    }

    input[type='radio'] {
      position: absolute;
      left: -9999em;
    }

    input[type='radio'] + label::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
      transition: 0.2s ease all;
      background: #ffffff;
      border: 1px solid #cacdd6;
      width: 28px;
      height: 28px;
      display: inline-block;
      margin: 0 4px 0 0;
      box-sizing: border-box;
      padding: 0;
      vertical-align: top;
    }

    input[type='radio'] + label {
      pointer-events: all;
      position: relative;
      padding-left: 40px;
      padding-top: 0;
      cursor: pointer;
      width: 100%;
      margin: 0 10px 10px 0;
      display: inline-block;
      color: var(--generalTextColor);
      font-weight: normal;
      text-decoration: inherit;
      text-transform: none;
      font-size: var(--generalTextFontSize);
      font-family: OpenSans, sans-serif;
      line-height: 28px;
      min-height: 30px;
    }

    input[type='radio']:checked + label::before {
      background: #fff;
      border-width: 9px;
      border-color: var(--primaryColor);
    }

    .field-radiogroup > div {
      display: flex;
      flex-flow: row wrap;
    }

    a:link,
    a:visited {
      color: var(--linkColor);
      cursor: pointer;
      text-decoration: none;
    }

    a:active,
    a:focus,
    a:hover {
      cursor: pointer;
      color: var(--linkColorFocus);
      text-decoration: underline;
    }

    select:hover {
      border: 1px solid #d3197c;
    }
    select {
      background: #fff url(/caret-down.svg) no-repeat 96% 60%;
      background-size: 16px;
      font-family: OpenSans, sans-serif;
      font-size: var(--generalTextFontSize);
      color: #000000;
      font-weight: normal;
      text-decoration: inherit;
      text-transform: none;
      line-height: 1.4;
      height: var(--controlHeight);
      padding: 0 var(--spacing1x);
      outline: none;
      min-width: 280px;
      border: 1px solid transparent;
      border-bottom: solid #e5e6e9 1px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    /* This is for accessibility - need to find if there is a better approach ... */
    input[type='checkbox'] {
      position: absolute;
      left: -9999em;
    }

    /* should use icon font */
    input[type='checkbox']:checked + label:before {
      background: url(/check-w.svg) no-repeat 50% 50%;
      background-color: var(--primaryColor);
      background-size: 16px;
      border-color: var(--primaryColor);
    }

    input[type='checkbox'] + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 28px;
      height: 28px;
      transition: 0.2s ease all;
      border: 1px solid;
    }

    input[type='checkbox'] + label {
      pointer-events: all;
      position: relative;
      padding-left: 40px;
      padding-top: 4px;
      cursor: pointer;
      height: calc(var(--controlHeight) - var(--spacing1x));
      width: 100%;
      margin: 0 var(--spacing1x) 0 0;
      display: block;
      color: var(--generalTextColor);
    }

    button {
      min-width: 130px;
      margin: 0;
      height: var(--controlHeight);
      padding: 0 var(--spacing2x);
      font-size: var(--generalTextFontSize);
      cursor: pointer;
      color: var(--primaryColor);
      border: 1px solid var(--primaryColor);
      border-radius: 5px;
    }
    button:active {
      outline: none;
      background-color: var(--primaryColorFocus);
      color: #fff;
    }
    button:focus {
      outline: none;
      background-color: var(--primaryColorFocus);
      color: #fff;
    }
    button:hover {
      outline: none;
      background-color: var(--primaryColorFocus);
      color: #fff;
    }

    button.primary {
      background-color: var(--primaryColor);
      color: #fff;
      border-color: transparent;
    }
    button.primary:active {
      background-color: var(--primaryColorFocus);
    }
    button.primary:focus {
      background-color: var(--primaryColorFocus);
    }
    button.primary:hover {
      background-color: var(--primaryColorFocus);
    }

    .right-aligned {
      text-align: right;
      justify-content: flex-end;
    }
    .margin-l-auto {
      margin-left: auto;
    }
    .margin-t-2x {
      margin-top: var(--spacing2x);
    }
    .flex {
      display: flex;
    }
    .flex.content-inline_grid_double {
      flex-flow: row wrap;
    }
    .flex.content-inline_grid_double > div {
      width: calc(50% - var(--spacing1x));
    }
    .flex.content-inline_grid_double > div:nth-child(2n) {
      margin-left: var(--spacing1x);
    }
    .flex.content-inline_grid_double > div:nth-child(2n + 1) {
      margin-right: var(--spacing1x);
    }
    .flex.content-default,
    .flex.content-stacked {
      flex-flow: column nowrap;
    }
    .flex.content-default > div {
      min-height: 40px;
      margin-bottom: var(--spacing2x);
    }
    .flex.content-stacked > div {
      display: flex;
      flex-flow: column nowrap;
      min-height: 35px;
      margin-bottom: var(--spacing2x);
    }
    .flex.content-inline_middle > * {
      margin-right: var(--spacing1x);
    }
    .flex.content-inline_middle > *:last-child {
      margin-right: 0;
    }
    .flex.content-inline_grid_70_30 > div:nth-child(2n) {
      width: 30%;
    }
    .flex.content-inline_grid_70_30 > div:nth-child(2n + 1) {
      width: 70%;
    }
    table {
      width: 100%;
    }
  </style>
`;
