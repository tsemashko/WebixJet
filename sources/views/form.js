import { JetView } from "webix-jet";
import { contacts } from "models/contacts";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class FormView extends JetView {
  config() {
    const _ = this.app.getService("locale")._;
    var form = {
      view: "form",
      localId: "form",
      elements: [
        { view: "text", label: _("User Name"), name: "Name" },
        { view: "text", label: _("Email"), name: "Email" },
        {
          view: "combo",
          label: _("Country"),
          name: "Country",
          options: {
            body: { template: "#Name#", data: countries }
          }
        },
        {
          view: "combo",
          label: _("Status"),
          name: "Statuses",
          options: {
            body: { template: "#Name#", data: statuses }
          }
        },
        {
          view: "button",
          value: _("Save"),
          click: () => {
            var form = this.$$("form");
            contacts.updateItem(form.getValues().id, form.getValues());
          }
        }
      ],
      autoheight: false,
      height: 500
    };
    return form;
  }
  urlChange(view, url) {
    webix.promise.all([
      contacts.waitData,
      countries.waitData,
      statuses.waitData
    ]).then(()=>{
      var id = url[0].params.id;
      if (id){
        view.setValues(contacts.getItem(id));
      }
    });
  }
}
