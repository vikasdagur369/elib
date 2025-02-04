import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import { runInNewContext } from "vm";

const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {

        const error = createHttpError(400, "All fields are required");
        return next(error);
    }

    //database calls
    const user = await userModel.findOne({email});

    if(user) {
        const error = createHttpError(400, "User already exist with this email")
        return next(error);
    }
    

    //process

    //response

    res.json({
        message: "User Created"
    })

}

export { createUser };