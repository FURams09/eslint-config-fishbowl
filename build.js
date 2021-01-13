const yaml = require('js-yaml');
const fs = require('fs');

const doc = yaml.load(fs.readFileSync('./.eslintrc.yaml', 'utf8'));
fs.writeFileSync('./index.js', `module.exports = ${JSON.stringify(doc, undefined, 2)}`)