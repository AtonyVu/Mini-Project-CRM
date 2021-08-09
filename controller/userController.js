const Users = require("../Models/userModel");
const sgMail = require("@sendgrid/mail");
const getAllUser = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const UserDelete = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const userUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        userUpdate,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};
const createUser = async (req, res) => {
  try {
    console.log(req.body);
    let CurrentSigninAt = new Date().toISOString();
    const newUser = await Users.create({
      ...req.body,
      CurrentSigninAt,
    });
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const Sendmail = async (req, res) => {
  const { message, email, header } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: "luancauthu@gmail.com", // Change to your verified sender
    subject: header,
    text: message,
    html: `<strong>${message}</strong>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.status(201).json({
        status: "ok roi do",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  Sendmail,
};
