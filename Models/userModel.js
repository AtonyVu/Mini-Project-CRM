const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Không được thiếu name"],
  },
  sdt: {
    type: Number,
    unique: true,
    require: [true, "Không được thiếu name"],
  },
  email: {
    type: String,
    require: [true, "Không được thiếu email"],
  },
  address: {
    type: String,
  },
  CurrentSigninAt: {
    type: String,
  },
});
const Users = mongoose.model("Users", userSchema);
module.exports = Users;
