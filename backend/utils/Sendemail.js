const nodemailer = require("nodemailer");

const sendEmail = async (email) => {

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: "yourgmail@gmail.com",
pass: "your_app_password"
}
});

const mailOptions = {
from: "yourgmail@gmail.com",
to: email,
subject: "Registration Successful",
text: "Thank you for registering in our application"
};

await transporter.sendMail(mailOptions);

};

module.exports = sendEmail;