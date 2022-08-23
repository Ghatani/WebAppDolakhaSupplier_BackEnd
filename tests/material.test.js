// use the path of your model
const material = require('../models/materialModel');
const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://localhost:27017/test_database_name';
beforeAll(async () => {
 await mongoose.connect(url, {
//  useNewUrlParser: true,
//  useCreateIndex: true
useNewUrlParser: true, 
useUnifiedTopology: true 
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('material Schema test anything', () => {

// the code below is for insert testing
 it('Add material testing anything', () => {
 const material = {
 'materialName': 'Sand',
 'materialPrice' : '9600',
 'materialQuantity': '25'
 };

 return material.create(material)
 .then((material_ret) => {
 expect(material_ret.username).toEqual('Sand');
 });
 });

// the code below is for delete testing
 it('to test the delete user is working or not', async () => {
 const status = await user.deleteMany();
 expect(status.ok).toB
});

it('to test the update', async () => {
    return material.findOneAndUpdate({_id :Object('5d20c71c0da2982d681e4bf0')},
   {$set : {materialName:'Sand'}})
    .then((pp)=>{
    expect(pp.materialName).toEqual('Sand')
})
   
});
   
})
   