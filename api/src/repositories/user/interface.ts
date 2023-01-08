import { ObjectId } from "mongodb";

interface IUser {
  _id: ObjectId;
  username: string;
  password: string;
}

interface IUserRepo {
  saveUser: (user: IUser) => Promise<IUser>;
  findUsers: () => Promise<IUser[]>;
	findOneUser: (username: string) => Promise<IUser>;
}

export { IUser, IUserRepo };
