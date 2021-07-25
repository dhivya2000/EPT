const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account_Schema = new Schema({
    account_type:{
        type:String,
        unique:true,
    },
      

   },{
    timestamps: true
});

var account_info = mongoose.model('account_info', account_Schema);

module.exports = account_info;