const timespan = require("jsonwebtoken/lib/timespan");
const mongoose = require("mongoose");
//const customer = require("./customerModel");
const user = require("./userModel");
//require("./customerModel");

const record = new mongoose.Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    username : {type : String},
    recordDate : {
        type : String,
        //default : Date.now,
    },
    materialName : {type : String},       
    cname : {
        //type : mongoose.Schema.Types.ObjectId,
        type : String
        //ref : 'Customer'
    },
    caddress : {type : String},
    materialQty : {type : Number}
})

module.exports = mongoose.model('Records',record);