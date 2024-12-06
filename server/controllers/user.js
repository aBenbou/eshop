import { asyncError } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";

export const login = asyncError(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Incorrect Email"
        });
    }

    //handle error
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
        return next(new ErrorHandler("Incorrect Password", 400));
    }

    //token

    res.status(200).json({
        success: true,
        message: `Welcome Back ${user.name}`,
    });
});

export const signup = asyncError(async (req, res, next) => {
    const { name, email, password, address, city, country, pinCode } = req.body;

    // add cloudinary in future

    await User.create({
        name,
        email,
        password,
        address,
        city,
        country,
        pinCode,
    });

    res.status(201).json({
        success: true,
        message: "Registered s\Successfully"
    });
});