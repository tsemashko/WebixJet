import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
  config() {
    var langButton = {
      view: "segmented",
      value: "ru",
      options: [
        { id: "ru", value: "RU", width: 50, height: 50 },
        { id: "en", value: "EN", width: 50, height: 50 }
      ]
    };
    return langButton;
  }
}
