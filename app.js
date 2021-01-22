const express = require("express");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));

app.use("/auth", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, "client", "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

module.exports = app;
