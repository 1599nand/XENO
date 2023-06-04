const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/Contact_Management';
const connectDB = async () =>{
    return (mongoose.connect(url)).then(()=>
        console.log("connection to database established")).catch((err)=>
            console.log("error connecting to database"));
    };

    module.exports=connectDB;