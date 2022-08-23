const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const record = require("../models/recordModel");

//to insert record
router.post("/record/add", auth.verifyUser, function(req,res){
    const recordDate = req.body.recordDate;
    const materialName = req.body.materialName;
    const cname = req.body.cname;
    const caddress = req.body.caddress;
    const materialQty = req.body.materialQty;
    const userid = req.userInfo._id;
    const username = req.userInfo.username;
    
    const data = new record({
        userid : userid,
        username : username,
        recordDate : recordDate,
        materialName : materialName,
        cname : cname,
        caddress : caddress,
        materialQty : materialQty
    })
    data.save()
    .then(function()
    { res.json({msg : "Succefully inserted!!"})})
    .catch(function()
    { res.json({msg : "Someting went wrong, Please try agian!!"})}
    );

})

router.delete('/record/delete/:rid', auth.verifyUser, function(req,res){
    const rid=req.params.rid;
    const userId =  req.userInfo._id;
    record.deleteOne({_id : rid, userId : userId})
    .then(function(){
        res.json({message : "Deleted"})
    })
    .catch(function(){
        res.json({message : "something went wrong!"})
    })
})

router.put('/record/update',auth.verifyUser, function(req,res){
    const rid = req.body.rid;
    const username = req.body.username;
    const recordDate = req.body.recordDate;
    const materialName = req.body.materialName;
    const cname = req.body.cname;
    const caddress = req.body.caddress;
    const materialQty = req.body.materialQty;
    record.updateOne({_id : rid},{
        username : username,
        recordDate : recordDate,
        materialName : materialName,
        cname : cname,
        caddress : caddress,
        materialQty : materialQty
    })
    .then(function()
    { res.json({msg : "Succefully updated"})})
    .catch(function()
    { res.json({msg : "Someting went wrong, Please try agian!!"})}
    );

})

//to view all records
router.get('/records/all', auth.verifyUser, function(req,res){
    record.find()
    .then(function(result){
        res.json(result)
    })
    .catch(function(){
        res.json({msg : "Something went wrong"})
    })
})

//to view logged in user records
router.get('/record/single', auth.verifyUser, function(req,res){
    const userid = req.userInfo._id;
    record.find({userid : userid})
    .then(function(result){
        res.json(result)
    })
    .catch(function(){
        res.json({msg : "Something went wrong"})
    })
})

router.get('/record/single/:rid', auth.verifyUser, function(req,res){
    const rid= req.params.rid;
    record.findOne({_id : rid})
     .then(function(result){
         res.json(result)
     })
     .catch(function(){
         res.json({message : "something went wrong"})
     })
})


module.exports = router;