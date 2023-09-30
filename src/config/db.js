const mongoose = require('mongoose');
const { mongoUrl } = require('../secret');


const connectDB = async()=>{

    try {
        await mongoose.connect(mongoUrl);
        console.log('DB connected successfully!!!')

        mongoose.connection.on('error', (error)=>{
            console.error('DB connection error: ', error);
        });
    } catch (error) {
        console.error('could not connect to DB: ',error.toString());
    }

}



module.exports = connectDB;