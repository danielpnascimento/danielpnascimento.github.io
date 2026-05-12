const fs = require('fs');
const packageJson = require('./package.json');

const versionData = {
  version: packageJson.version
};

fs.writeFileSync(
  './version.json',
  JSON.stringify(versionData, null, 2)
);

console.log('version.json atualizado!');