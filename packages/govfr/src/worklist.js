import { html } from 'lit';

const WorkList = (cases, onOpen) => html`
  ${cases.length > 0
    ? html`
        <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
          <caption>Mes requetes</caption>
          <thead>
            <tr>
              <th span="col">Requetes</th>
              <th span="col">Action</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    (item) => html`
                <tr>
                  <td scope="row">${item.name}</td>
                  <td>
                    <button @click="${onOpen}" class="fr-btn" data-type="assignment" data-id="${item.ID}">
                      Ouvrir
                    </button>
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
      `
    : html`
        <div style='line-height: 50px;text-align:center'>Aucune requete en cours</div>
      `}
`;

export { WorkList };
