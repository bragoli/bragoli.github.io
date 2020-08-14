var unirest = require("unirest");

var req = unirest("GET", "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague");

req.query({
	"matchday": "1"
});

req.headers({
	"x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
	"x-rapidapi-key": "bef204f312msh2ce006afa43c36dp159592jsn9191a6c734a4",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});