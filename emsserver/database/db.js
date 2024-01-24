import moongoose  from "moongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async()=>{
    const {DB_USERNAME, DB_PASSWORD}=process.env;
    const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@atlascluster.infvi9z.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await moongoose.connect(URL,{
           useUnifiedTopology:true,
           useNewUrlParser:true, 
        });
        console.log("Db Connection Succesfully");
    } catch (error) {
        console.log("Connection Error with Database",error);
    }
};
export default Connection;
