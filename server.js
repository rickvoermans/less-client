//Install express server
const express = require('express');
const app = express();
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname + 'dist')));

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
