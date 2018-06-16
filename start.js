const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.log(`An error occured: ${err.message}`);
});

const app = require('./app');
app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), () => {
  console.log(`Express server running on port: ${server.address().port}`)
});