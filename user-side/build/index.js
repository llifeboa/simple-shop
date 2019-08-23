/* eslint-disable @typescript-eslint/no-var-requires */
const frontend = require('./frontend');
const backend = require('./backend');

module.exports = [...frontend, backend];
