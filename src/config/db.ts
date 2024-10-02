import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {

    try {


        mongoose.connection.on("connected", () => {
            console.log("db connected successfuly to atlas")
        })

        mongoose.connection.on("error", () => {
            console.log('Error in connecting to DB')
        }
        )
        await mongoose.connect(config.databaseUrl as string)

    }
    catch {
        console.error("failed to connect to database.");
        process.exit(1);
    }
}
export default connectDB;