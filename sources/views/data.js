import { JetView } from "webix-jet";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class DataView extends JetView {
  config() {
    var header = {
      view: "toolbar",
      css: "webix_dark",
      cols: [
        {
          view: "label",
          label: "Data",
          align: "center"
        }
      ]
    };
    var menu = {
      view: "list",
      select: true,
      on: {
        onAfterSelect: function(id) {
          $$(id).show();
        }
      },
      data: ["Countries", "Statuses"],
      gravity: 0.4
    };
    var table = {
      cells: [
        {
          view: "datatable",
          id: "Countries",
          select: true,
          autoConfig: true,
          columns: [
            {
              id: "ShortName",
              header: "Short Name",
              fillspace: 1,
              editor: "text",
              template: " ",
              sort: "string"
            },
            {
              id: "Name",
              header: "Full Name",
              fillspace: 1,
              editor: "text",
              template: "#Name# <i class='webix_icon wxi-close remove'></i>",
              sort: "string"
            }
          ],
          onClick: {
            remove(e, id) {
              this.remove(id);
              return false;
            }
          },
          editable: true,
          editaction: "dblclick"
        },
        {
          view: "datatable",
          id: "Statuses",
          select: true,
          autoConfig: true,
          columns: [
            {
              id: "Name",
              header: "Name",
              fillspace: 1,
              editor: "text",
              sort: "string"
            },
            {
              id: "Icon",
              header: "Icon",
              template: "#Icon# <i class='webix_icon wxi-close remove'></i>",
              editor: "text",
              fillspace: 1,
              sort: "string"
            }
          ],
          onClick: {
            remove(e, id) {
              this.remove(id);
              return false;
            }
          },
          editable: true,
          editaction: "dblclick"
        }
      ]
    };
    return {
      rows: [
        header,
        {
          cols: [menu, table]
        }
      ]
    };
  }
  init() {
    this.$$("Countries").parse(countries);
    this.$$("Statuses").parse(statuses);
  }
}
