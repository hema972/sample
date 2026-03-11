const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail"); // ✅ import name matches file

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        email = email.toLowerCase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already existing" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // ✅ corrected: call sendEmail exactly as imported (case-sensitive)
        sendEmail(email).catch(err => console.log("Email error:", err.message));
        // to send mails to user

        // ✅ safe response: avoid sending password
        res.status(201).json({
            msg: "User registered successfully",
            user: {
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server error" }); // ✅ added server error response
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() }); // ✅ lowercase for login
        if (!user) {
            return res.status(400).json({ msg: "user not registered" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "credentials are wrong" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        /*jwt.sign(payload, secretKey, options) JWT is used for authentication.
        where payload    :- {id:user._id, role:user.role}
              secret key :- process.env.JWT_SECRET (This is the secret password used to sign the token.)
              options    :- {expiresIn:"1d"} (This means: Token expires in 1 day. After 1 day → user must login again.)
                         (ex:-"1d","2h","4m")
        The generated JWT is stored in the variable token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)
        */
        res.send({ token }) // This sends the token to the client (for example Postman or your frontend).
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server error" }); // ✅ added server error response
    }
}