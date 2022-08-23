const express=require("express");
const mongoose=require("mongoose");
require("./database/database");
const cors = require("cors");

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname+'/view/images'));

const userRoute = require("./router/userRoute");
app.use(userRoute);

const custRoute = require("./router/customerRoute");
app.use(custRoute);

const materialRoute = require("./router/materialRoute");
app.use(materialRoute);

const recordRoute = require("./router/recordRoute");
app.use(recordRoute);

const transRoute = require("./router/transactionRoute");
app.use(transRoute);
 
app.listen(90);
