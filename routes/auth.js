const router = require("express").Router();
const {
    authRules,
    loginRules,
    checkResult
} = require("../middlewares/auth-validation");

router.post("/", authRules, checkResult, require("../controllers/auth"));
router.post("/login", loginRules, checkResult, require("../controllers/login"));

module.exports = router;
