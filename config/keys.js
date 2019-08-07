const isEnvProd = process.env.NODE_ENV === 'production';
const keysFileName = isEnvProd ? './keys_prod' : './keys_dev';

module.exports = require(keysFileName);
