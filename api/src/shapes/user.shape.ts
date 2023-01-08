import { hashSync } from "bcrypt";
import * as yup from "yup";

const userShape = yup.object().shape({
  username: yup.string().lowercase().required("Username required"),
  password: yup
    .string()
    .required("Password required")
    .transform((pw) => hashSync(pw, 10)),
});

export default userShape;
