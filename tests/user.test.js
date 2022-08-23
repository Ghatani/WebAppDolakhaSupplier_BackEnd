// use the path of your model
const user = require('../models/userModel');
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

describe('User Schema test', () => {

// the code below is for insert testing
 it('Add user testing', () => {
 const user = {
 'username': 'Sant',
 'password': 'pass',
 'phnno' : '9865412351'
 };

 return user.create(user)
 .then((user_ret) => {
 expect(user_ret.username).toEqual('Sant');
 });
 });

// the code below is for delete testing
 it('to test the delete user is working or not', async () => {
 const status = await user.deleteMany();
 expect(status.ok).toB
});

it('to test the update', async () => {
    return user.findOneAndUpdate({_id :Object('5d20c71c0da2982d681e4bf0')},
   {$set : {username:'Sant'}})
    .then((pp)=>{
    expect(pp.username).toEqual('Sant')
})
   
});
   
})
   