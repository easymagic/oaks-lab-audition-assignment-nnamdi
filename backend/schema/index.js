const {buildSchema} = require('graphql');
const {getTypeDefs} = require('../helpers');

// console.log(getTypeDefs('structures'));

schema = getTypeDefs('structures');

module.exports = schema;