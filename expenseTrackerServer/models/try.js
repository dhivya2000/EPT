const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const try_Schema = new Schema({
   
    try_type:{
        type:String,
        unique:true,
    },
      

   },{
    timestamps: true
});

var Try_Schema = mongoose.model('try_info', try_Schema);

module.exports = Try_Schema;