import * as yup from "yup";
import { makeTitle } from "../services";

const customerShape = yup.object().shape({
  name: yup
    .string()
    .required("Name required")
    .transform((str) => makeTitle(str)),
  email: yup.string().email().lowercase().required("Email required"),
  phone: yup
    .string()
    .required("Phone required")
    .matches(
      /^\(\d{2}\)\d{4,5}\-\d{4}$/,
      "Accepted phone format (xx)xxxxx-xxxx"
    ),
  address: yup
    .string()
    .required("Address required")
    .transform((str) => makeTitle(str)),
  cpf: yup
    .string()
    .required("Cpf required")
    .matches(
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      "Accepted cpf format xxx.xxx.xxx-xx"
    ),
});

export default customerShape;
