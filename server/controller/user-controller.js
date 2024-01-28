//Api to data base conncetiones ad update delete get user in data base to api
import User from "../schema//user-schema.js";
export const getUsers=async (request,response)=>{
    try {
        const users= await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const getUsersData=async (request,response)=>{
    try {
        const data=await User.findById({_id:request.body.id})
        response.json(data)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}
export const updateUsers=async(req,res) =>{
    try {
        await User.updateMany({_id:req.body._id},{
            $set:{
                cname:req.body.cname,
                mobile:req.body.mobile,
                mail:req.body.mail,
                dob:req.body.dob,
                doj:req.body.doj,
                gender:req.body.gender,
                rel:req.body.rel,
                address:req.body.address,
                adate:req.body.adate,
                dept:req.body.dept,
                empid:req.body.empid,
            }
     } )
     res.status(201).json("Succesfully Updated")
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const deleteUser= async(req,res)=>{
    try {
        await User.deleteOne({_id:req.body.id})
        res.status(201).json('sucess')
    } catch (error) {
       res.status(404).json({message:error.message}) ;
    }
}
