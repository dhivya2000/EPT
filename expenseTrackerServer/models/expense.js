const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
    
const expense_Schema = new Schema({
    user_id:
       { type: Schema.Types.ObjectId, 
        ref: 'user_info',
        unique:false
       },
    types:{
        type:String,
        unique:false
    },
    amount:{
        type:String,
        unique:false
    },
    account_type:
       { type: Schema.Types.ObjectId, 
        ref: 'account_info',
        unique:false
    },
      

   },{
    timestamps: true
});

var Expense_Schema = mongoose.model('expense_info', expense_Schema);

module.exports = Expense_Schema;