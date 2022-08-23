const express = require("express");
const router = new express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
const admin = require("../models/adminModel");

const multer = require("multer");
const upload = require("../uploads/file");

router.post('/admin/register', function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    bcryptjs.hash(password,10,function(e, hashed_value){
        const udata = new admin({
            username : username,
            password : hashed_value,
            email : email
        })
        udata.save()
        .then(function(){
            res.json({message: "Successfully registered"});
        })
        .catch(function(e){
            res.json(e)
        })
    })
})

router.put('/admin/update', auth.verifyAdmin, function(req,res){
    const uid =req.adminInfo._id;
    const phnno = req.body.phnno;
    user.updateOne({_id : uid},{phnno : phnno})
    .then(function()
    { res.json({msg : "Profile updated"})})
    .catch(function()
    { res.json({msg : "Someting went wrong, Please try agian!!"})}
    );
})


module.exports = router;