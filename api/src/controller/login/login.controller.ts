import { compareSync } from "bcrypt";
import { ObjectId } from "mongodb";

import AsyncControl from "../../@types/controller.types";
import { UserRepository } from "../../repositories";
import signIn from "../../service";

const userLogin: AsyncControl = async (req, res) => {
  try {
    const { username, password } = req.validated;

    const user = await new UserRepository().findOneUser(username);

    if (!user) {
      return res.status(400).json({ error: "Username and password missmatch" });
    }

    const checkPassword = compareSync(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ error: "Username and password missmatch" });
    }

    const token = signIn({
      username: req.validated.username,
      _id: user._id as ObjectId,
    });

    return res.status(200).json({ token });
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default userLogin;
