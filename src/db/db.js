import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
console.log(process.env.MONGODB_URI)

const connectDB = async ()=>{
    try {

       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);

        
    } catch (error) {
        console.log("Error : ",error);
        process.exit(1);
        // throw error;
    }
}

export default connectDB;