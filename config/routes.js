// we are requiring a controller file that will do stuff when a route is triggered
var friends = require('./../server/controllers/friends.js');
module.exports = function(app) {
	// these routes are all going to return json 
	// don't want to render/redirect at all we just want to respond with data
	app.get('/friends_json', function(req, res) {
		friends.show(req, res);
	})

	// create a route that handles adding a friend
	
}