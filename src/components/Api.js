var qs = require("querystring");
var http = require("https");

var options = {
	"method": "POST",
	"hostname": "endlessmedicalapi1.p.rapidapi.com",
	"port": null,
	"path": "/AcceptTermsOfUse?SessionID=%3Crequired%3E&passphrase=%3Crequired%3E",
	"headers": {
		"x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
		"x-rapidapi-key": "d0ee44ebc5msh3c029311b4b6534p15acd8jsn5ee3d3904902",
		"content-type": "application/x-www-form-urlencoded"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(qs.stringify({}));
req.end();


///////////////////

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://endlessmedicalapi1.p.rapidapi.com/AcceptTermsOfUse?SessionID=%3Crequired%3E&passphrase=%3Crequired%3E",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
		"x-rapidapi-key": "d0ee44ebc5msh3c029311b4b6534p15acd8jsn5ee3d3904902",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});