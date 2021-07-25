const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_account_Schema = new Schema({
    user_id:
    {type: Schema.Types.ObjectId, ref: 'user_info'},
    account_type:
        {type: Schema.Types.ObjectId, ref: 'account_info'},
    amount:{
        type:String,
        unique:false,
    }
      

   },{
    timestamps: true
});

var User_account_Schema = mongoose.model('user_account_info', user_account_Schema);

module.exports = User_account_Schema;