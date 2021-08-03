const express = require("express");
const {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

module.exports = router;
