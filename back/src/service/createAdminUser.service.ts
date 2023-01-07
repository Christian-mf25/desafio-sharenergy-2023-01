import { UserRepository } from "../repositories";
import { User } from "../entities/User";
import { hashSync } from "bcrypt";

const createAdmin = async () => {
  const checkUsername = await new UserRepository().findOneUser(
    process.env.ADMIN_USERNAME
  );

  if (!checkUsername) {
    const user = new User();

    user.username = process.env.ADMIN_USERNAME;
    user.password = hashSync(process.env.ADMIN_PASSWORD, 10);

    const saveUser = await new UserRepository().saveUser(user);
  }
};

export { createAdmin };
