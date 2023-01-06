import * as yup from "yup";
import { makeTitle } from "../utils";

const customerShape = yup.object().shape({
  name: yup
    .string()
    .required("Name required")
    .transform((str) => makeTitle(str)),
  email: yup
    .string()
    .email("Invalid e-mail")
    .lowercase()
    .required("Email required"),
  phone: yup
    .string()
    .matches(
      /^\(\d{2}\)\d{4,5}\-\d{4}$/,
      "Accepted phone format (xx)xxxxx-xxxx"
    )
    .required("Phone required"),
  address: yup
    .string()
    .required("Address required")
    .transform((str) => makeTitle(str)),
  cpf: yup
    .string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      "Accepted cpf format xxx.xxx.xxx-xx"
    )
    .required("Cpf required"),
});

export default customerShape;
