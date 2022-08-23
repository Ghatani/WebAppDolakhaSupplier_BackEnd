const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const customer = require("../models/customerModel");

//adding new customers
router.post('/customer/add', auth.verifyUser, function(req,res){   
    const cphnno = req.body.cphnno;
    customer.findOne({cphnno : cphnno})
    .then(function(cdata){
        if (cdata!=null){                       
            res.json({msg : "Customer phone number already existed!!"})
            return;
        }
        else
        {   
            const cusdata = new customer(req.body);
            cusdata.save();
            res.json({msg : "Succefully inserted!!"})        
        }
    })
    .catch(function(e){
        res.json(e)
    })
    
})

//editing existed customers
router.put('/customer/update/', auth.verifyUser, function(req,res){
    const cid = req.body.cid;
    const cname = req.body.cname;
    const caddress = req.body.caddress;
    const cphnno= req.body.cphnno;
    customer.updateOne({_id : cid},{
        cname : cname,
        caddress : caddress,
        cphnno : cphnno
    })
    .then(function(){
        res.json({message : "Customer updated successfully!!"})
    })
    .catch(function(){
        res.json({message : "Something went wrong!"})
    })

})

//delete customer details
router.delete("/customer/delete/:cid", auth.verifyUser, function(req,res){
    const cid = req.params.cid;
    customer.deleteOne({_id : cid})
    .then(function(){
        res.json({message : "Deleted successfully"})
    })
   .catch(function(){
       res.json({message : "Something went wrong!"})
   })
})

//view all the customers
router.get('/customer/view/all', auth.verifyUser, function(req,res){
    customer.find()
    .then(function(result){
        res.json(result)
    })
    .catch(function(){
        res.json({message : "Something went wrong"})
    })
})

// view single customer
router.get("/customer/single/:cid", auth.verifyUser, function(req,res){
    const cid = req.params.cid;
    customer.findOne({_id : cid})
    .then(function(result){
        res.json(result)
    })
    .catch(function(){
        res.json({message : "something went wrong"})
    })
})


module.exports = router;