export const contacts = new webix.DataCollection({
	/*data: [
		{ "id": 1, "Name": "Alex Wanny", "Email": "alex@gmail.com", "Status": 1, "Country": 2 },
		{ "id": 2, "Name": "Doris Wan", "Email": "doris@gmail.com", "Status": 1, "Country": 3 }
	]*/
	url: "http://localhost:8096/api/v1/contacts/",
	save: "rest->http://localhost:8096/api/v1/contacts/"
})