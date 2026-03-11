const nodemailer = require("nodemailer");

const sendEmail = async (toEmail) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",   // or any other email service
    auth: {
      user: "yourgmail@gmail.com",      // your email
      pass: "your_app_password"         // Gmail App Password or API key
    }
  });

  const mailOptions = {
    from: "yourgmail@gmail.com",
    to: toEmail,               // ✅ user email from form
    subject: "Registration Successful",
    text: "Thank you for registering in our website!"
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;