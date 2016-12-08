// contains rest api calls for the project

var request = require('request');
var unirest = require('unirest');

exports.convertToYodaSpeech = function(req, res){

	// check token too
	console.log('call received');
	// console.log(req.body);

	if(req.body.text != ""){

		var text = req.body.text;
		console.log(text);

		/*request({
			headers: {
				'X-Mashape-Key': 'o0Sy70Enmumshakwy0gkKjIlx08np1VyGlujsncltKgF9lInmP',
				'Accept': 'text/plain'
			},
			uri: url: "https://yoda.p.mashape.com/yoda?sentence=" + text,
		}, function(err, ){
			console.log(body);
			res.json({status: 'success', data: 'All done, working'});
		})*/

		unirest.get("https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.")
			.header("X-Mashape-Key", "o0Sy70Enmumshakwy0gkKjIlx08np1VyGlujsncltKgF9lInmP")
			.header("Accept", "text/plain")
			.end(function (result) {
				console.log(result.status, result.headers, result.body);
			});

	}
};