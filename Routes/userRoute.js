const express = require("express");
const {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  Sendmail,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);
router.route("/sendmail").post(Sendmail);
// np
module.exports = router;
