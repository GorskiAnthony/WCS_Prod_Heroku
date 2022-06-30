const router = require("express").Router();

const ContactController = require("../controllers/ContactController");

router.get("/", ContactController.getAll);
router.post("/add", ContactController.add);
router.delete("/delete", ContactController.delete);

module.exports = router;
