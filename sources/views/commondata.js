import { JetView } from "webix-jet";

export default class CommonData extends JetView {
  constructor(app, name, data) {
    super(app, name);
    this._tdata = data;
  }
  config() {
    return {
      rows: [
        { view: "datatable", editable: true, editaction: "dblclick", autoConfig: true },
        {
          view: "button",
          type: "form",
          value: "Add new",

          click: () => {
            this.getRoot().queryView("datatable").add({
              Name: "Some info",
              Icon: ""
            });
          }
        }
      ]
    };
  }
  init(view) {
    view.queryView("datatable").parse(this._tdata);
  }
}
