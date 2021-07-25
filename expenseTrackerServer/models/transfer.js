const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transfer_Schema = new Schema({
    user_id:
        {type: Schema.Types.ObjectId, ref: 'user_info'},
    amount:{
        type:String,
        unique:false
    },
    from_account_type:
        {type: Schema.Types.ObjectId, ref: 'account_info'},
    to_account_type:
         {type:Schema.Types.ObjectId,ref:'account_info'},

   },{
    timestamps: true
});

var Transfer_Schema = mongoose.model('transfer_info', transfer_Schema);

module.exports = Transfer_Schema;