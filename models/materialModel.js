const mongoose = require("mongoose");

// const material = mongoose.model("Material",{
//     materialName : {type : String},
//     materialPrice : {type : String},
//     materialQuantity : {type : String}
// })

const material = new mongoose.Schema({
    materialName : {type : String, required : true},
    materialPrice : {type : String},
    materialQuantity : {
        type : String
    },
    materialImage : {type : String}
})

module.exports = mongoose.model('Material',material);
