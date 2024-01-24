import moongoose from "moongoose";

const userSchema=moongoose.Schema({
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
const user=moongoose.model('staffems',userSchema)
export default user;