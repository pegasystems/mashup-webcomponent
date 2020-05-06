import { LitElement, property } from 'lit-element';

export default class PegaElement extends LitElement {
  @property({ type: String }) url = '';

  /* only used if the actions openAssignment or openWorkByHandle are used */
  @property({ type: String }) caseID = '';

  /* Username for authentication  */
  @property({ type: String }) username = '';

  /* This is for development only  */
  @property({ type: String }) password = '';

  /* Title of the my worklist card  */
  @property({ type: String }) title = 'My worklist';

  /* Show the create button inside the worklist - if showing the worklist, you can filter the list of cases you can
     create by setting the value of casetype  */
  @property({ type: String }) bShowCreate = 'true';

  /* hide the close or cancel actions when the action type is not workList  */
  @property({ type: String }) bShowCancel = 'true';

  /* hide the attachments button  */
  @property({ type: String }) bShowAttachments = 'false';

  /* hide the save action  */
  @property({ type: String }) bShowSave = 'true';

  /* JWT Token for authentication  */
  @property({ type: String }) token = '';

  /* Initial content when creating a new case - you can pass an object as { prop1: 'value1', prop2: 'value2' }  */
  @property({ type: Object }) initialContent = '';

  /* 4 actions supported: createNewWork, workList, openAssignment and openWorkByHandle */
  @property({ type: String }) action = '';

  /* only used if the action createNewWork or workList are used - for the action workList, this is used to filter
     the list of case that you can create */
  @property({ type: String }) casetype = '';

  constructor() {
    super();
    this.cases = []; /* List of all the cases in your worklist */
    this.dataPages = {}; /* Cache of all the DP requested - key is the name of the DP */
    this.name = ''; /* Name of the current case that is being processed */
    this.etag = ''; /* eTag that must be sent when doing a save or submit */
    this.casepyStatusWork = '';
    this.casedata = {}; /* Case data information */
    this.data = {};
    this.numAttachments = 0;
    this.attachmentcategories = [];
    this.assignmentID = '';
    this.actionID = '';
    this.content = {};
    this.errorMsg = '';
    this.validationMsg = '';
    this.bShowConfirm = false;
    this.bShowNew = false;
  }
}
