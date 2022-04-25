const mongoose = require('mongoose');

function _connect(){
    const MONGO_HOST = "localhost";
    const MONGO_DB = 'quiz';

    const URI = 'mongodb://127.0.0.1:27017';
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(
            () => {
                console.log("Base de datos conectada");
            },
            (err) => {
                console.log("Error en la conección" , err);
            },
        )
}

module.exports = _connect;