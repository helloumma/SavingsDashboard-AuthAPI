const _= require('lodash');
const env = process.env.NODE_ENV || 'local';
const envConfig = require('./' + env);
let defaultconfig = {
    env: env
}
module.exports = _.merge(defaultConfig, envConfig);