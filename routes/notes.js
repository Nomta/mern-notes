const router = require("express").Router();
const { getUser } = require("../middlewares/user-definition");

router.get("/", getUser, require("../controllers/notes").get);
router.get("/:id", getUser, require("../controllers/notes").getById);
router.post("/create", getUser, require("../controllers/notes").post);

module.exports = router;
