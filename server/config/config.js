const mongoose = require('mongoose');

const dbConfig = () => {
    return mongoose.connect(process.env.DB_URL)
    .then(()=> {
        console.log("DB Connented")
    })
    .catch((err)=> console.log(err))
}

module.exports = dbConfig