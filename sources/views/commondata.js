import { JetView } from "webix-jet";

export default class CommonData extends JetView {
  constructor(app, name, data) {
    super(app, name);
    this._tdata = data;
  }
  config() {
    const _ = this.app.getService("locale")._;
    return {
      rows: [
        { localId: "table", view: "datatable", editable: true, editaction: "dblclick", autoConfig: true },
        {
          view: "button",
          value: _("Remove selected"),
          click: () => {
            this._tdata.remove(this.$$("table").getSelectedId());
          }
        },
        {
          view: "button",
          type: "form",
          value: _("Add new"),

          click: () => {
            this._tdata.add({
              Name: "Some info",
              Icon: ""
            });
          }
        }
      ]
    };
  }
  init(view) {
    view.queryView("datatable").sync(this._tdata);
  }
}
