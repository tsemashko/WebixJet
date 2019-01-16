import { JetView, plugins } from "webix-jet";
import { contacts } from "models/contacts";

export default class ContactsView extends JetView {
  config() {
    var header = {
      view: "toolbar",
      css: "webix_dark",
      cols: [
        {
          view: "label",
          label: "Contacts"
        }
      ]
    };
    var list = {
      view: "list",
      id: "top:list",
      template: "#Name#<br>#Email#",
      scroll: false,
      select: true,
      type: {
        height: 60
      }
    };
    var form = {
      view: "form",
      id: "form",
      elements: [
        { view: "text", label: "User Name", name: "Name" },
        { view: "text", label: "Email", name: "Email" }
      ],
      autoheight: false,
      height: 500
    };

    var ui = {
      cols: [{ rows: [header, list] }, form]
    };
    return ui;
  }
  init(view) {
    this.$$("top:list").parse(contacts);
  }
}
