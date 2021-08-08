const express = require("express");
const app = express();
const {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const router = express.Router();
app.use(cors());
app.options("/", cors()); // enable pre-flight requests
app.post(createUser);
router.route("/").get(getAllUser);
router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

module.exports = router;
