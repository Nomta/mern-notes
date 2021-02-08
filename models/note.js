const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    title: { type: String, required: true, max: 50 },
    text: { type: String, required: true, max: 50e3 },
    date: { type: Date, default: Date.now },
    user: { type: Types.ObjectId, ref: "User" }
});

module.exports = model("Note", schema);
