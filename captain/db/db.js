const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
        console.log("captain service mongodb connected successfully!")

    }catch(err){
        console.log("captain service mongodb connect failed! ", err.message);
        process.exit(1);
    }
}

module.exports = connectDB