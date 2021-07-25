const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
    
const income_Schema = new Schema({
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

var Income_Schema = mongoose.model('income_info', income_Schema);

module.exports = Income_Schema;