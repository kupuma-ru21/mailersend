// REF: https://www.mailersend.com/help/getting-started
// REF: https://www.mailersend.com/blog/send-email-nodejs#sending-emails-with-nodemailer

import "dotenv/config";
import nodemailer from "nodemailer";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Setup email data
const mailOptions = {
  from: `"Test" <${process.env.SMTP_USER}>`, // sender address
  to: "xxxxxx@email.com", // list of receivers
  subject: "Welcome! Your free trial is ready.", // Subject line
  text: "Hey there! Welcome to Your Business, we're happy to have you here! You'll be happy to know that your free trial awaits, all you need to do is head to your account, log in and start playing. Remember to check out our guides and contact support if you need anything. Regards, The Your Business Team", // plain text body
  html: `
    <p>Hey there!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
    <p>Welcome to Your Business, we're happy to have you here!</p>
    <p>You'll be happy to know that your free trial awaits, all you need to do is head to your account, log in and start playing.</p>
    <p>Remember to check out our guides and contact support if you need anything.</p>
    <br>
    <p>Regards,</p>
    <p>The Your Business Team</p>
  `, // html body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
