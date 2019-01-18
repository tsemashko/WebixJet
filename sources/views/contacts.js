import { JetView, plugins } from "webix-jet";
import { contacts } from "../models/contacts";
import FormView from "./form";

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
      localId: "list",
      template:
        "#Name#<br>#Email#<span class='remove webix_icon wxi-close'></span>",
      scroll: false,
      select: true,
      type: {
        height: 60
      },
      onClick: {
        remove: function(e, id) {
          contacts.remove(id);
        }
      },
      on: {
        onAfterSelect(id) {
          this.$scope.setParam("id", String(id), true);
        }
      }
    };
    var addButton = {
      view: "button",
      type: "form",
      value: "Add",
      click: () => {
        contacts.add({
          Name: "Name Surname",
          Email: "name@example.com",
          Status: 1,
          Country: 1
        });
      }
    };

    var ui = {
      cols: [
        { rows: [header, { rows: [list, addButton] }] },
        { rows: [{ $subview: FormView }] }
      ]
    };
    return ui;
  }
  init() {
    this.$$("list").sync(contacts);
  }
  urlChange(view) {
    this.$$("list").select(this.getParam("id"));
  }
}
