const mongoose = require('mongoose');

mongoose.set("strictQuery", true);
mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if(!err){
        console.log("MongoDB connection Succeeded");
    }
    else{
        console.log("Error in db connection :" + JSON.stringify(err,undefined,2)); // converts the  object to string with intendation of 2 charactors
    }
})
module.exports = mongoose;