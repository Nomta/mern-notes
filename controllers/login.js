const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ message: "User not found" });
        }
        const token = jwt.sign(
            {
                userId: user.id
            },
            config.get("jwtSecret"),
            {
                expiresIn: "1h"
            }
        );
        res.json({ token, userId: user.id });
    } catch (err) {
        res.status(500).json({
            message: "Login error"
        });
    }
};
