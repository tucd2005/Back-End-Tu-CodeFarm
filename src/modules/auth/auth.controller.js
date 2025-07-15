import MESSAGES from "../../common/contstants/messages.js";
import createError from "../../common/utils/error.js";
import handleAsync from "../../common/utils/handleAsync.js";
import User from "./auth.model.js";

export const authRegister = handleAsync(async(req, res,next) => {
    const {email, password} = req.body;

    const exitingUser = await User.findOne({email});
    if(exitingUser){
        return next(createError(400, MESSAGES.AUTH.EMAIL_ALREADY_EXISTS));

    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.handleAsync(password, salt);

    const newUser = await User.create({
        ...req.body,
        password: hash,
        role: "guest",
    });

    if(!newUser){
        return next(createError(500, MESSAGES.AUTH.REGISTER_SUCCESS, newUser))
    }

    newUser.password = underfined;
    return res.status(201).json(
        createResponse(true, 201, MESSAGES.AUTH.REGISTER_SUCCESS, newUser)
    )
})

// export const authLogin = handleAsync(async(req, res, next)=> {

// })
