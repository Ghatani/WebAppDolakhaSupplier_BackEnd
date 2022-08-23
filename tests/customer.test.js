// use the path of your model
const customer = require('../models/customerModel');
const mongoose = require('mongoose');

// use the new name of the database
const url = 'mongodb://localhost:27017/test_database_name';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
//  useCreateIndex: true
useUnifiedTopology: true 
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});
describe('customer Schema test anything', () => {

// the code below is for insert testing
 it('Add customer testing anything', () => {
 const customer = {
 'cname': 'Sant',
 'caddress': 'bkt',
 'phnno' : '9865412351'
 };

 return customer.create(customer)
 .then((cus_ret) => {
 expect(cus_ret.cname).toEqual('Sant');
 });
 });

// the code below is for delete testing
 it('to test the delete customer is working or not', async () => {
 const status = await customer.deleteMany();
 expect(status.ok).toB
});

it('to test the update', async () => {
    return customer.findOneAndUpdate({_id :Object('5d20c71c0da2982d681e4bf0')},
   {$set : {cname:'ram'}})
    .then((pp)=>{
    expect(pp.username).toEqual('ram')
})
   
});
   
})
   