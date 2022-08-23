const mongoose = require("mongoose");

// const customer = mongoose.model("Customer",{
//     cname : {type : String},
//     caddress : {type : String},
//     cphnno : {type : String}
// })

const customer = new mongoose.Schema({
    cname : {type : String},
    caddress : {type : String},
    cphnno : {type : String}
})

// module.exports = customer;

module.exports = mongoose.model('Customers',customer);