const Note = require("../models/note");

exports.get = async function (req, res) {
    try {
        const notes = await Note.find({ user: req.user.userId });
        res.json(notes);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getById = async function (req, res) {
    try {
        if (!isValidObjectId(req.params.id)) {
            res.status(404).json({ message: "Not found" });
        }
        const note = await Note.findById(req.params.id);
        res.json(note);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.post = async function (req, res) {
    try {
        const note = new Note({ user: req.user.userId, ...req.body });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
};
