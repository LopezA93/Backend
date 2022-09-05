const moongose = require('mongoose');


async function connection() {

    const URLstring = "mongodb://localhost:27017/ecommerce"

    await moongose.connect(URLstring)
}

module.exports = connection;
