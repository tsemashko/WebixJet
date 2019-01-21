import { JetView, plugins } from "webix-jet";
import { contacts } from "../models/contacts";
import { countries } from "../models/countries";
import { statuses } from "../models/statuses";
import FormView from "./form";

export default class ContactsView extends JetView {
  config() {
    const _ = this.app.getService("locale")._;
    var header = {
      view: "toolbar",
      css: "webix_dark",
      cols: [
        {
          view: "label",
          label: _("Contacts")
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
          if (this.isSelected(id)){
            contacts.remove(id);
            this.select(this.getFirstId());
          } else {
            contacts.remove(id);
          }
          if (!this.getFirstId()){
            this.$scope.app.show("/top/contacts");
          }
        }
      },
      on: {
        onAfterSelect: (id) => {
          this.setParam("id", id, true);
        }
      }
    };
    var addButton = {
      view: "button",
      type: "form",
      value: _("Add"),
      click: () => {
        var id = contacts.add({
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
    webix.promise.all([
      contacts.waitData,
    ]).then(()=>{
      var id = this.getParam("id") || contacts.getFirstId();
      if (this.$$("list").exist(id))
        this.$$("list").select(id);
    });
  }
  urlChange() {
    webix.promise.all([
      contacts.waitData,
    ]).then(()=>{
      var id = this.getParam("id") || contacts.getFirstId();
      this.$$("list").select(id);
    });
  }
}
