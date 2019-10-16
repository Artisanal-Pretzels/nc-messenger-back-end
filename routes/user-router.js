const userRouter = require("express").Router();
const {
  getUser,
  getAllUsers,
  patchUser
} = require("../controllers/user-controller");

userRouter.route("/").get(getUser);
userRouter.route("/all").get(getAllUsers);
userRouter.route("/:username").patch(patchUser);

module.exports = userRouter;
