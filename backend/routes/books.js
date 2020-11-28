const router = require("express").Router();

const bookController = require("../controllers/bookscontroller");

router.route("/save").post(bookController.create);
router.route("/find").get(bookController.findAll)
router.route("/delete/").post(bookController.delete)

module.exports = router;