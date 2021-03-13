const Note = require("../models/note");
const { isValidObjectId } = require("mongoose");

exports.get = async function (req, res) {
    // const limit = parseInt(req.query.limit);

    try {
        const notes = await Note.find({ user: req.user.userId }).sort({
            _id: -1
        });
        // .limit(limit);

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

exports.delete = async function (req, res) {
    try {
        if (!isValidObjectId(req.params.id)) {
            res.status(404).json({ message: "Not found" });
        }
        const note = await Note.findById(req.params.id);
        const { id } = note;
        await note.remove();

        res.json({ id });
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

exports.put = async function (req, res) {
    try {
        const note = await Note.findById(req.params.id);
        await note.updateOne(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
};
