const shunter = require('shunter');
const config = require('./config');

const app = shunter(config.shunter(__dirname, config.moduleName));

app.start();