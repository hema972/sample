const nodemailer = require("nodemailer");

const sendEmail = async (toEmail) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: "Registration Successful",
    text: "Thank you for registering in our website!"
  };

  await transporter.sendMail(mailOptions);
  
  
};

module.exports = sendEmail;