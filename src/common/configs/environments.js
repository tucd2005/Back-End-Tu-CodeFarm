import dotenv from "dotenv";

dotenv.config({
    path: ".env",
    encoding: "utf8",
    debug: true,
    override: true,
});

export const {
    DB_URI,
    HOST,
    PORT,
    JWT_SECRET_KEY,
    JWT_EXPIRES_IN,
    EMAIL_USER,
    EMAIL_PASSWORD,
    JWT_SECRET_KEY_FOR_EMAIL,
    JWT_EXPIRES_IN_FOR_EMAIL,
} = process.env;