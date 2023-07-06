/* eslint-disable no-undef */
/* eslint-disable no-new */
import { render, html } from 'lit';

const renderGrid = (webcomp) => {
  const gridDiv = webcomp.getRenderRoot().querySelector('#myGrid');
  if (gridDiv) {
    const columnDefs = [
      { field: 'pxRefObjectInsName', headerName: 'ID', sortable: true },
      { field: 'pxTaskLabel', headerName: 'Tache', sortable: true },
      { field: 'pyLabel', headerName: 'Requete', sortable: true },
      { field: 'pyAssignmentStatus', headerName: 'Status', sortable: true },
      {
        field: 'pxUrgencyAssign', headerName: 'Urgence', type: 'numberColumn', sortable: true,
      },
      { field: 'pxAssignedUserName', headerName: 'Utilisateur', sortable: true },
      {
        field: 'pxCreateDateTime', headerName: 'Date de creation', type: 'dateColumn', sortable: true,
      },
    ];

    // let the grid know which columns and what data to use
    const gridOptions = {
      columnDefs,
      defaultColDef: {
        // make every column use 'text' filter by default
        filter: 'agTextColumnFilter',
        // make columns resizable
        resizable: true,
        // disable cell data types
        cellDataType: false,
      },
      rowSelection: 'single',
      onSelectionChanged: () => {
        const selectedRows = gridOptions.api.getSelectedRows();
        webcomp.assignmentID = selectedRows[0].pzInsKey;
        webcomp.sendExternalEvent({ type: 'openassignment', id: webcomp.assignmentID });
        webcomp.caseID = '';
        const casedata = webcomp.getRenderRoot().querySelector('#case-data');
        if (casedata != null) {
          render(webcomp.genLoadingIndicator(), casedata);
        }
        webcomp.requestUpdate();
      },
      columnTypes: {
        numberColumn: { width: 130, filter: 'agNumberColumnFilter' },
        dateColumn: { width: 300, filter: 'agDateColumnFilter' },
      },
      rowData: webcomp.data,
    };
    new agGrid.Grid(gridDiv, gridOptions);
  }
};

const getContent = () => {
  const fields = [{ field: 'pxRefObjectInsName' }, { field: 'pxTaskLabel' },
    { field: 'pyLabel' }, { field: 'pyAssignmentStatus' }, { field: 'pxUrgencyAssign' },
    { field: 'pxAssignedUserName' }, { field: 'pzInsKey' }, { field: 'pxRefObjectKey' },
    { field: 'pxRefObjectClass' }, { field: 'pxCreateDateTime' }];
  return JSON.stringify({ query: { select: fields }, paging: { maxResultsToFetch: 5000 } });
};

const WorkTable = (webcomp) => {
  webcomp.sendData('dataviews', { id: 'D_pyMyWorkList', content: getContent, response: renderGrid });
  return html`<div id="myGrid" style="height: 600px;" class="ag-theme-alpine"></div>`;
};

export { WorkTable };
