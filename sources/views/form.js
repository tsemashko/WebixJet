import { JetView } from "webix-jet";
import { contacts } from "models/contacts";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class FormView extends JetView {
  config() {
    var form = {
      view: "form",
      localId: "form",
      elements: [
        { view: "text", label: "User Name", name: "Name" },
        { view: "text", label: "Email", name: "Email" },
        {
          view: "combo",
          label: "Country",
          name: "Country",
          options: {
            body: { template: "#Name#", data: countries }
          }
        },
        {
          view: "combo",
          label: "Status",
          name: "Statuses",
          options: {
            body: { template: "#Name#", data: statuses }
          }
        },
        {
          view: "button",
          value: "Save",
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
    var id = url[0].params.id;
    //webix.message(id);
    console.log(contacts.getItem(id));
    view.setValues(contacts.getItem(id));
  }
}
