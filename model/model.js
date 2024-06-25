const mongoose = require('mongoose');

const CrudSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "please add the name details"]
    },
    email : {
        type : String,
        required : [true, "please add the email details"]
    }
},{
    timestamps : true
})
module.exports = mongoose.model('Crud', CrudSchema);