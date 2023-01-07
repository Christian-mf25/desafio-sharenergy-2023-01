import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepo } from "./interface";

class UserRepository implements IUserRepo {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  saveUser = async (user: IUser) => await this.ormRepository.save(user);

  findUsers = async () => await this.ormRepository.find();

  findOneUser = async (username) =>
    await this.ormRepository.findOne({
      where: { username },
    });
}

export { UserRepository, IUser };
