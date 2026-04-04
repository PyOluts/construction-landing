import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log("1. Starting transport creation...");
console.log("USER:", process.env.GMAIL_USER);
console.log("PASS LENGTH:", process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD.length : "MISSING!");

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 5000,
  logger: true,
  debug: true
});

console.log("2. Attempting to verify connection...");

transporter.verify(function (error, success) {
  if (error) {
    console.error("--- ERROR DETAILS ---");
    console.error(error.message);
    process.exit(1);
  } else {
    console.log("SUCCESS! Server is ready to take our messages.");
    process.exit(0);
  }
});
