import mongoose from 'mongoose';


const userSchema=mongoose.Schema({
    cname:String,
    mobile:String,
    mail:String,
    dob:Date,
    doj:Date,
    gender:String,
    rel:String,
    address:String,
    adate:Date,
    class:String,
    roll:String,
    image:String
});
const user=mongoose.model('staffems',userSchema)
export default user;