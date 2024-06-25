const router = require("express").Router();
const registerControl = require("../controllers/user");

router.post("/register", registerControl.register);

module.exports = router;
