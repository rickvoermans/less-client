//Install express server
const express = require('express');
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/less')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/less/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
