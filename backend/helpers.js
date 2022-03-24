const { readFileSync } = require("fs");
const path = require('path'); 

function getTypeDefs(filename) {
    return readFileSync(path.join(process.cwd(), 'schema', `${filename}.graphql`), 'utf8');
}

module.exports = {getTypeDefs};