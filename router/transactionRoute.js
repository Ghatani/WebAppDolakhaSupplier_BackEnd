const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const transaction = require("../models/transactionModel");
const Router = require("express");

//insert new transaction
router.post('/transaction/insert', auth.verifyUser, function(req,res){
    const userid = req.userInfo._id;
    const username = req.userInfo.username;
    const transName = req.body.transName;
    const transDate = req.body.transDate;
    const transAmount = req.body.transAmount;
    console.log("userid is " + userid);
    const transactiondata = new transaction({
        userid : userid,
        username : username,
        transName : transName,
        transDate : transDate,
        transAmount : transAmount
    });
    transactiondata.save()
    .then(function(){
        res.json({message : "Transaction Inserted!", success : true})
        
    }).catch(function(){  
        res.json({message : "Something went wrong!"})
    });
})

//update transaction
router.put('/transaction/update', auth.verifyUser, function(req,res){
    const tranId = req.body.tid;
    //const username = req.userInfo.username;
    const transName = req.body.transName;
    const transDate = req.body.transDate;
    const transAmount = req.body.transAmount;
    transaction.updateOne({_id : tranId},{    
        transName : transName,
        transDate : transDate,
        transAmount : transAmount
    })
    .then(function(){
        res.json({message : "transaction Updated!"})
    })
    .catch(function(){
        res.json({message : "Something went wrong!"})
    })
})

//delete selected transaction
router.delete("/transaction/delete/:tid", auth.verifyUser, function(req,res){
    const transId = req.params.tid;
    const userid = req.userInfo._id;
    transaction.deleteOne({_id : transId, userid : userid})
    .then(function(){
        res.json({message : "Deleted"})
    })
   .catch(function(){
       res.json({message : "something went wrong!"})
   })
   
})

//view all transactions
router.get('/transaction/all', auth.verifyUser, function(req,res){
    transaction.find()
    .then(function(result){
        res.json(result)
    })
    .catch(function(){
        res.json({message : "something went wrong"})
    })
})

//view transaction of logged in user
router.get('/transaction/single', auth.verifyUser, function(req,res){
    const userid = req.userInfo._id;
    transaction.find({userid : userid})
    .then(function(result){
        res.json(result)
    })
    .catch(function(){
        res.json({message : "something went wrong"})
    })
})

//view one transaction
router.get('/transaction/one/:tid', auth.verifyUser, function(req,res){
    const tid = req.params.tid;
     transaction.findOne({_id : tid})
     .then(function(result){
         res.json(result)
     })
     .catch(function(){
         res.json({message : "something went wrong"})
     })
})


module.exports = router;