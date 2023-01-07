import * as yup from "yup";

const loginShape = yup.object().shape({
  username: yup.string().lowercase().required("Username required"),
  password: yup.string().required("Password required"),
});

export default loginShape;
