import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
  config() {
    const lang = this.app.getService("locale").getLang();
    var langButton = {
      view: "segmented",
      id: "lang",
      value: lang,
      options: [
        { id: "ru", value: "RU", width: 50, height: 50 },
        { id: "en", value: "EN", width: 50, height: 50 }
      ],
      click: () => {
        this.app.getService("locale").setLang(this.$$("lang").getValue());
      }
    };
    return langButton;
  }
}
