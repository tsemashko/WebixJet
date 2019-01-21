import { JetView } from "webix-jet";
import { countries } from "models/countries";
import { statuses } from "models/statuses";
import CommonData from "views/commondata";

export default class DataView extends JetView {
  config() {
    const _ = this.app.getService("locale")._;
    var header = {
      view: "toolbar",
      css: "webix_dark",
      cols: [
        {
          view: "label",
          label: _("Data"),
          align: "center"
        }
      ]
    };
    var menu = {
      view: "list",
      id: "list",
      select: true,
      on: {
        onAfterSelect: function(id) {
          $$(id).show();
        }
      },
      data: [
        {id: "data:countries", value:_("Countries")}, 
        {id: "data:statuses", value:_("Statuses")}
      ],
      gravity: 0.4
    };
    var table = {
      cells: [
        { id:"data:countries", $subview : new CommonData(this.app,"", countries)}, 
        { id:"data:statuses", $subview: new CommonData(this.app,"", statuses)}
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
  init(view) {
    this.$$("list").select("data:countries");
  }
}
