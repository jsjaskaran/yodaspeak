// all the routes for our application

module.exports = function(app, restcalls){

    // for index
    app.get('/', function(req, res){
        res.send('<h1>Hello, Welcome to slack app rest api.</h1>');
    });

    // convert csv to json
    app.post('/api/v1/yodaspeak', restcalls.convertToYodaSpeech);

    app.get('*', function(req, res){
        res.send('<h5>This is a 404 page</h5>');
    });

};