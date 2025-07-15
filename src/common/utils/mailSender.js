import nodemailer from "nodemailer"
import createError from "./error.js";
const sendEmail = async (email,subject,text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER, 
            pass: EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: "Duc Tu",
        to: email,
        subject: subject,
        text: text
    }
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw createError(500, `Gui email that bai : ${error.message}`)
    }
}

export default sendEmail