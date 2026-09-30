const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'biruh images');
const files = fs.readdirSync(dir);
console.log('Files in dir:', files);
