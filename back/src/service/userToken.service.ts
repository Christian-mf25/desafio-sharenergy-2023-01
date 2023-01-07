import jwt from "jsonwebtoken";
import { jwtConfig } from "../config";

const signIn = (data: any) => {
	const token = jwt.sign(
		{ _id: data._id },
		jwtConfig.secret,
		{ expiresIn: jwtConfig.expiresIn },
 );

  return token;
};

export default signIn;
