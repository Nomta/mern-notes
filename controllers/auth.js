const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = async function (req, res) {
    try {
        console.log("AUTH POST");
        const { email, password } = req.body;
        const exist = await User.findOne({ email });

        if (exist) {
            return res
                .status(400)
                .json({ message: "This user already exists" });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const user = new User({ email, password: passwordHash });

        await user.save();

        res.status(201).json({ message: "ok" });
    } catch (err) {
        res.status(500).json({
            message: "Auth error"
        });
    }
};
