/**
 * Created by rperez on 1/8/17.
 */
var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

//fowards all https traffic to http
//this is because open weather app free is
//only on http
app.use(function (req, res, next) {
  //checks the protocol
  if (req.headers['x-forwarded-proto'] === 'https') {
    //if http just keep going
    res.redirect('http://' + req.hostname + req.url);
  } else {
    //if https, redirect to http
    next();
  }
});

app.use(express.static('public')); //exposed folder

app.listen(PORT, function () { //Starts a UNIX socket and listens for connections on the given path.
   console.log('Express server is up and running in port ' + PORT);
});
