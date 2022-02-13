import mongoose  from "mongoose";
const Connection= async(URL)=>{

    try {
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Database connected Sucessfully');  
    } catch (error) {
        console.log('Error:',error.message);
    }
 
}
export default Connection;
