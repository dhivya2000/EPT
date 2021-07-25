const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_detail_Schema = new Schema({

    user_id: {
        type: Number,
        required: true,
        unique:true,
    },
    user_name: {
        type: String,
        required: true,
        unique:false
    },
    user_email:{
        type:String,
        required:true,
        unique:true,
    },
    user_pass:{
        type:String,
        required:true,
        unique:true,
    },
    user_phoneno:{
        type:String,
        required:true,
        maxlength:10,
        unique:false
    }
   },{
    timestamps: true
});

var user_info = mongoose.model('user_info', user_detail_Schema);

module.exports = user_info;