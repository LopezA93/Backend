const moongose = require('mongoose');


async function connection() {

    const URLstring = "mongodb+srv://lopeza93:River2022@firstcloster.cxeka9h.mongodb.net/usuarios?retryWrites=true&w=majority"

    await moongose.connect(URLstring)
}

module.exports = connection;
