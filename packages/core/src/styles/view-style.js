/* eslint max-len: 0 */
import { html } from 'lit';

export const viewStyle = () => html`
  <style>
    label {
      color: var(--generalLabelColor);
      line-height: 1.5;
    }
    .helper-text {
      color: var(--generalLabelColor);
      font-size: var(--generalHelperTextFontSize);
      margin-top: 0.3rem;
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
      margin: 0;
      color: var(--generalTextColor);
    }
    ul {
      margin: 0;
    }
    fieldset {
      border: none;
      padding:0;
      margin:0;
    }

    select,
    textarea,
    input {
      font-family: OpenSans, sans-serif;
      font-size: var(--generalTextFontSize);
      font-weight: normal;
      text-align: left;
      color: var(--generalTextColor);
      border: 1px solid var(--generalBorderColor);
      border-radius: var(--generalBorderRadius);
      background-color: transparent;
      outline: 0;
      padding: var(--spacing05x) var(--spacing1x);
    }
    input {
      height: var(--controlHeight);
    }
    select {
      height: calc(var(--controlHeight) + var(--spacing1x) + 2px);
    }
    input:hover,
    input:active,
    input:focus {
      outline: 0;
      border-color: var(--primaryColor);
    }

    input[type='number'] {
      inline-size: auto;
    }

    div[readonly],
    input[readonly],
    textarea[readonly] {
      background-color: #fafafa;
      border-color: transparent;
    }

    .field-item {
      display: flex;
      flex-flow: column nowrap;
    }

    .flex.content > .field-button {
      display: inline-block;
    }

    .field-item .field-caption {
      display: block;
      font-size: var(--generalTextFontSize);
      color: var(--generalLabelColor);
      min-height: 27px;
      padding-bottom: 3px;
    }

    textarea {
      resize: none;
      overflow: hidden;
      display: block;
      tab-size: 4;
    }

    textarea:hover,
    textarea:active,
    textarea:focus {
      outline: 0;
      border-color: var(--primaryColor);
    }

    input[type='radio'] {
      position: absolute;
      opacity: 0;
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
      min-height: 30px;
      display: inline-block;
      margin: 0 4px 0 0;
      box-sizing: border-box;
      padding: 0;
      vertical-align: top;
    }

    input[type='radio']:hover + label::before,
    input[type='radio']:focus + label::before {
      border-color: var(--primaryColor);
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
    button.Light,
    a,
    a:link,
    a:visited {
      color: var(--linkColor);
      cursor: pointer;
      text-decoration: none;
      outline:none;
      min-width: 0;
      border: none;
      padding: 0;
      display:content
    }
    button.pzhc:focus,
    button.pzhc:active,
    a:active,
    a:focus {
      cursor: pointer;
      color: var(--primaryActionColorFocus);
      border-color: var(--primaryActionColorFocus);
      text-decoration: none;
      outline:-webkit-focus-ring-color auto 1px;
    }

    button.pzhc:hover {
      cursor: pointer;
    }

    a:hover {
      cursor: pointer;
      color: var(--primaryActionColorFocus);
      text-decoration: underline;
    }

    button.Strong {
      color: #FFF;
      background-color: var(--primaryActionColor);
    }

    button.Strong:hover,
    button.Strong:focus,
    button.Strong:active {
      color: #FFF;
      background-color: var(--primaryActionColorFocus);
    }

    button.Simple:hover,
    button.Simple:focus,
    button.Simple:active {
      color: var(--linkColorFocus);
      background:none;
    }

    select:hover,
    select:focus,
    select:active {
      border: 1px solid var(--primaryColor);
    }
    select {
      background-size: 16px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    .combobox {
      background-size: 16px;
    }

    button.Simple {
      background: none;
      color: rgb(0, 0, 0);
      min-width:0;
      border:none;
      display:flex;
      align-items: center;
    }

    button.Icon {
      background: none;
      min-width: 0;
      display: inline-block;
      padding: 0;
      height: auto;
      width: -moz-fit-content;
      width: fit-content;
      border:none;
    }

    button.action-menu,
    select,
    .combobox {
      background: #fff
        url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OC4wNiAyOC4wNCcgIHdpZHRoPScxOCcgaGVpZ2h0PSc5Jz48cGF0aCBmaWxsPSIjMTAxMzJFIiBkPSdNNDcuNDEuNTVhMS45MSAxLjkxIDAgMCAwLTIuNyAwbC0yMC43MSAyMi42MS0yMC43NS0yMi42LS4xOC0uMThhMS45MSAxLjkxIDAgMSAwLTIuNTEgMi44OGwyMS44NyAyMy44NGExLjY5IDEuNjkgMCAwIDAgLjEzLjMxIDIuMTUgMi4xNSAwIDAgMCAyLjg1IDAgMS43NSAxLjc1IDAgMCAwIC4xMy0uMzJsMjEuODctMjMuODRhMS45MSAxLjkxIDAgMCAwIDAtMi43eicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLjEgLjA5KScvPjwvc3ZnPg==')
        no-repeat calc(100% - 8px) 60%;
    }

    select,
    button.action-menu {
      padding: 0 28px 0 8px;
      border: 1px solid #000;
    }
    button.action-menu:hover,
    button.action-menu:active,
    button.action-menu:focus {
      background-color:rgba(0,0,0,0.1);
      color:#000;
    }

    input[type='checkbox'] {
      position: absolute;
      opacity: 0;
    }

    input[type='checkbox']:checked + label:before {
      background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjIgMjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIyIDI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjEuMSw3LjQgMjAuNiw2LjggMjAuMiw2LjUgNy43LDE5IDEuNSwxMi45IDAuMywxNC4yIDcuNywyMS40IDIxLjUsNy44ICIvPgo8L3N2Zz4K')
        no-repeat 50% 50%;
      background-color: var(--primaryColor);
      background-size: 16px;
      border-color: var(--primaryColor);
    }

    input[type='checkbox']:focus + label:before,
    input[type='checkbox']:hover + label:before {
      border-color: var(--primaryColor);
    }

    input[type='checkbox'] + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 28px;
      min-height: 30px;
      transition: 0.2s ease all;
      border: 1px solid;
    }

    input[type='checkbox'] + label {
      pointer-events: all;
      position: relative;
      padding-left: 40px;
      padding-top: 4px;
      cursor: pointer;
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
      width: auto;
      background:transparent;
    }

    button:active,
    button:focus,
    button:hover {
      color: var(--primaryColorFocus);
    }

    button.primary {
      background-color: var(--primaryColor);
      color: #fff;
      border-color: transparent;
    }
    button.primary:active,
    button.primary:focus,
    button.primary:hover {
      background-color: var(--primaryColorFocus);
    }

    .right-aligned {
      text-align: right;
      justify-content: flex-end;
    }
    .flex.margin-l-auto {
      margin-left: auto;
    }
    .margin-t-2x {
      margin-top: var(--spacing2x);
    }
    .flex {
      display: flex;
    }
    .flex-col {
      flex-flow: column;
    }
    .flex-all {
      flex:1;
      margin: 0 var(--spacing1x);
    }
    .flex.margin-l-auto {
      margin-left: auto;
    }
    .align-center {
      align-items: center;
    }
    .justify-end {
      justify-content: end;
    }
    .flex.layout-content-inline_grid_double > div {
      width: calc(50% - var(--spacing1x));
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_double > div:nth-child(2n) {
      margin-left: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_double > div:nth-child(2n + 1) {
      margin-right: var(--spacing1x);
    }
    .flex.layout-content-default,
    .flex.layout-content-stacked,
    .flex.layout-content-stacked_with_labels_left {
      flex-flow: column nowrap;
      width: 100%;
    }
    .flex.layout-content-inline_grid_double {
      flex-flow: row wrap;
    }
    .flex.layout-content-inline_grid_30_70 > div:nth-child(2n+1) {
      width:calc(30% - var(--spacing1x));
      margin-right: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_30_70 > div:nth-child(2n) {
      width:calc(70% - var(--spacing1x));
      margin-left: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_70_30 > div:nth-child(2n+1) {
      width:calc(70% - var(--spacing1x));
      margin-right: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-inline_grid_70_30 > div:nth-child(2n) {
      width:calc(30% - var(--spacing1x));
      margin-left: var(--spacing1x);
      margin-bottom: var(--spacing1x);
    }
    .flex.layout-content-default > div {
      min-height: 40px;
      margin-bottom: var(--spacing2x);
    }
    .flex.layout-content-stacked > div {
      display: flex;
      min-height: 35px;
      margin-bottom: var(--spacing2x);
    }
    .layout-content-stacked_with_labels_left  > .field-item {
      flex-flow: row;
      margin-bottom: var(--spacing1x);
    }
    .layout-content-stacked_with_labels_left  > .field-item .field-caption {
      margin-right: var(--spacing1x);
      margin-bottom: 0;
      width: 200px;
    }
    .flex.layout-content-inline_middle {
      align-items: center;
    }
    .flex.main-header {
      min-height: 40px;
      margin-bottom: 8px;
    }
    .flex.main-header > h2 {
      margin-bottom:0;
      flex:1;
      display: flex;
      align-items: center;
    }
    .flex.main-header > h2 > span {
      white-space: nowrap;
      display: flex;
      margin-left: 6px;
    }
    .flex.layout-content-inline > *,
    .flex.layout-content-inline_middle > * {
      margin-right: var(--spacing1x);
    }
    .flex.layout-content-inline_middle > *:last-child {
      margin-right: 0;
    }
    .layout-content-default-form {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      row-gap: 8px;
      column-gap: 16px;
      margin-bottom: 16px;
    }
    .layout-content-default-form-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .layout-content-default-form-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .action-button-area {
      display: flex;
      flex-flow: row;
      padding-top: var(--spacing2x);
      border-top: 1px solid var(--generalBorderColor);
    }
    .action-button-area > button {
      margin-right: var(--spacing1x);
    }
    .action-button-area > button:last-child {
      margin: 0 0 0 auto;
    }
    .flex.field-item.field-table {
      overflow-x: auto;
      flex-flow: column nowrap;
    }
    table {
      width:100%;
      border-collapse: collapse;
    }
    th {
      text-align:left;
      background: var(--TableHeaderBgColor);
      height: 40px;
      padding: 0 var(--spacing1x);
      border: 1px solid var(--TableBorderColor);
    }
    td {
      height: 50px;
      padding: 0 var(--spacing1x);
      border: 1px solid var(--TableBorderColor);
    }
    td > input {
      width: -webkit-fill-available;
      inline-size: -moz-available;
    }
    .rdl > div {
      border-bottom: 1px solid var(--generalBorderColor);
      padding-bottom: var(--spacing1x);
      padding-top: var(--spacing1x);
    }
    .rdl > div:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .rdl > div:first-child {
      padding-top: 0;
    }
    .rdl h3 {
      margin-bottom: 0;
    }

    .button-menu {
      position: relative;
      display: inline-block;
    }
    .button-menu > ul {
      position: absolute;
      top: 100%;
      background: #fff;
      display: block;
      margin: 0;
      list-style: none;
      padding: 0;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
      z-index:2;
      right:0;
    }
    .button-menu > ul > li {
      margin: 0;
      white-space: nowrap;
      display: block;
      padding: 0.4em 1em;
      text-decoration: none;
      color: #333333;
      margin: 0;
    }
    .button-menu > ul > li:focus,
    .button-menu > ul > li:hover {
      background: #bbbbbb;
      outline:none;
    }
    .icon-required:after {
      vertical-align: middle;
      content: '*';
      font-size: 13px;
      font-weight: 700;
      text-align: left;
      color: #d91c29;
      padding-left: 3px;
    }
    .content-items-maxwidth > .content-item {
      max-width: 80ch;
    }
    .field-text > span:empty::after {
      content: '\\2013\\2013';
      color: #808080;
    }
    .validation:not(:empty),
    .error {
      padding: 14px;
      background: #FFD9DB;
      color: #000;
      font-size: 16px;
      border-radius: 8px;
      display: flex;
      margin-bottom: 14px;
      align-items: center;
      word-break: break-word;
    }

    .error button {
      margin-left: auto;
      background: transparent;
      color: #000;
      min-width:auto;
    }

    .error-field {
      outline: red 1px solid;
    }

    .field-checkbox {
      flex-flow: row nowrap;
      margin-top: 23px;
      align-items: center;
    }

    .field-currencyinput > div {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
    }

    .field-currencyinput > div > input {
      padding-inline-start: 2ch;
      width: 100%;
    }

    .currency-symbol {
      position: absolute;
      left: 7px;
      top: 25%;
    }

    .badge_text {
      background-color: #088488;
      color: #FFF;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0px 4px;
      text-align: center;
      margin-top: 1px;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 0.05em;
    }

    #case-data,
    #case-data > div:first-child {
      flex: 1;
    }

    #case-data {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
    }

    .success {
      background-color: #DAF2E3;
      color:#000;
      text-align: center;
      padding: var(--spacing1x) var(--spacing2x);
      margin-bottom:var(--spacing2x);
      margin-top: var(--spacing1x);
    }

    .mashup-modal {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(6,6,6,0.3);
      z-index: 2;
      transition: opacity .400s ease-in-out;
    }
    .mashup-modal > div {
      max-height: 90vh;
      min-height: 300px;
      max-width: 800px;
      width: 80vw;
      margin: 5vh auto;
      background: #FFF;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 10px;
      box-shadow: 4px 4px 5px rgba(0,0,0,.3);
      display: flex;
      flex-flow: column nowrap;
      padding-bottom: 16px;
    }
    .mashup-modal > div > .main-header {
      padding: 0 16px;
      border-bottom: 1px solid rgba(0,0,0,.2);
    }
    .mashup-modal .validation {
      margin: 0 16px;
    }
    #modalcontent {
      margin: 16px 16px 0;
      display:flex;
      flex-flow:column;
      flex:1;
      overflow-y: hidden;
    }
    #modalcontent > .flex {
      flex:1;
      overflow-y: auto;
    }
    .file-upload {
      background: rgba(0,116,212,0.05);
      border: 1px dashed #0076D1;
      padding: 16px;
      display: flex;
      align-items: center;
    }
    .drop-file-hover {
      background: rgba(0,116,212,0.15);
    }
    .file-upload input {
      display:none;
    }
    .row-item {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      margin-top: 8px;
      width:100%;
    }
    .upload-content {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      flex-grow: 1;
      overflow-y: auto;
    }
    .list-items .empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
    }
    .list-item-title {
      display: flex;
      flex-flow: column nowrap;
      flex: 1;
    }
    .list-item-meta {
      font-size:14px;
    }
    .list-item-meta > span:after {
      content: '|';
      margin:0 3px;
    }
    .list-item-meta > span:last-child:after {
      content: '';
    }
    .doc-icon {
      position: relative;
      margin-right: 8px;
    }
    .doc-icon > svg {
      width: 30px;
      height: 30px;
    }
    .doc-icon > span {
      position: absolute;
      left: 1px;
      right: 1px;
      bottom: 8px;
      font-size: 7px;
      text-transform: uppercase;
      text-align: center;
    }
    .count-badge {
      min-width: 24px;
      line-height: 24px;
      border-radius: 12px;
      background-color: #e9eef3;
      color: rgba(0,0,0,.6);
      font-weight: 600;
      font-size: 12px;
      margin-top: -9px;
      margin-left: -3px;
    }

    .loading {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height:100%;
    }

    .loading > .dot {
      width: 1rem;
      height: 1rem;
      margin: 0 0.5rem;
      background: #0076D1;
      border-radius: 50%;
      animation: Loading-ellipsis 1s infinite cubic-bezier(0.4, 0.6, 0.1, 1);
    }

    .loading > .dot:nth-child(2) {
      animation-delay: 0.1667s;
    }

    .loading > .dot:nth-child(3) {
      animation-delay: 0.3334s;
    }

    @keyframes Loading-ellipsis {
      0% {
          transform: scale(0);
          opacity: 0;
      }
      50% {
          transform: scale(1);
          opacity: 1;
      }
      100% {
          transform: scale(0);
          opacity: 0;
      }
    }

    .rich-text-main {
      display: flex;
      flex-flow: column nowrap;
    }
    .rich-text-main h1,
    .rich-text-main h2,
    .rich-text-main h3 {
      color: var(--generalTextColor);
    }
    .rich-text-main .editor-actions {
      overscroll-behavior: contain;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .rich-text-main .editor-actions::-webkit-scrollbar {
      display: none;
    }

    .rich-text-main .editor {
      border: 1px solid #ccc;
      overflow: auto;
      height: 216px;
      min-height: 216px;
    }
    .rich-text-main .toolbar {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
    .rich-text-main [contenteditable] {
      outline: 0px solid transparent;
      min-height: 200px;
      height: 200px;
      font-size: 14px;
      padding: 8px;
    }
    .rich-text-main .toolbar > button,
    .rich-text-main .toolbar > select {
      margin-right: 2px;
      height: 30px;
      font-size: 11px;
    }
    .rich-text-main .toolbar button {
      color: rgb(0, 0, 0);
      cursor: pointer;
      border: 1px solid rgb(204, 204, 204);
      border-radius: 4px;
      padding: 2px;
      min-width: 26px;
      height: 26px;
      background: #FFF;
      min-width:0;
    }
    .rich-text-main .toolbar .active {
      background: #ccc;
    }
    .rich-text-main blockquote {
      border-left: 2px solid #ddd;
      margin-left: 0;
      margin-right: 0;
      padding-left: 10px;
      color: #aaa;
      font-style: italic;
    }
    .rich-text-main img {
      max-width: 100%;
    }
    .sr-only:not(:focus):not(:active) {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    @media only screen and (max-width: 640px) {
      .flex.layout-content-inline_grid_70_30,
      .flex.layout-content-inline_grid_30_70,
      .flex.layout-content-inline_grid_double {
        flex-flow: column nowrap;
      }
      .flex.layout-content-inline_grid_70_30 > div:nth-child(2n+1),
      .flex.layout-content-inline_grid_70_30 > div:nth-child(2n),
      .flex.layout-content-inline_grid_30_70 > div:nth-child(2n+1),
      .flex.layout-content-inline_grid_30_70 > div:nth-child(2n),
      .flex.layout-content-inline_grid_double > div:nth-child(2n),
      .flex.layout-content-inline_grid_double > div:nth-child(2n+1) {
        width:100%;
        margin-right: 0;
        margin-left: 0;
      }
      .layout-content-default-form-2,
      .layout-content-default-form-3 {
        display:flex;
        flex-flow: column nowrap;
      }
      button {
        min-width: auto;
        padding: 0 var(--spacing1x);
      }
      .flex.main-header {
        flex-flow: column;
        align-items: flex-start;
      }
    }
  </style>
`;
