const mongoose = require("mongoose");

const admin = mongoose.model("admin",{
    username : {type : String},
    password : {type : String},
    email : {type : String}
})

module.exports = admin;