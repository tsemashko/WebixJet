export const statuses = new webix.DataCollection({
	/*data: [
		{ "id": 1, "Name": "Busy", "Icon": "cogs" },
		{ "id": 2, "Name": "Open", "Icon": "user" }
	]*/
	url: "http://localhost:8096/api/v1/statuses/",
	save: "rest->http://localhost:8096/api/v1/statuses/"
});