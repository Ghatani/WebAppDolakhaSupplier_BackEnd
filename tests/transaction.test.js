// use the path of your model
const transaction = require('../models/transactionModel');
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
describe('transaction Schema test anything', () => {

// the code below is for insert testing
 it('Add transaction testing anything', () => {
 const transaction = {
 'transName': 'Salary',
 'transDate': '02-20-2022',
 'transAmount' : '15000'
 };

 return transaction.create(transaction)
 .then((trans_ret) => {
 expect(trans_ret.transName).toEqual('Salary');
 });
 });

// the code below is for delete testing
 it('to test the delete transaction is working or not', async () => {
 const status = await transaction.deleteMany();
 expect(status.ok).toB
});

it('to test the update', async () => {
    return transaction.findOneAndUpdate({_id :Object('5d20c71c0da2982d681e4bf0')},
   {$set : {transName:'advance'}})
    .then((pp)=>{
    expect(pp.transName).toEqual('advance')
})
   
});
   
})
   