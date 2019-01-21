export const countries = new webix.DataCollection({
	/*data: [
		{ "id": 1, "Name": "USA" },
		{ "id": 2, "Name": "Canada" },
		{ "id": 3, "Name": "Italy" }
	]*/
	url: "http://localhost:8096/api/v1/countries/",
	save: "rest->http://localhost:8096/api/v1/countries/"
});