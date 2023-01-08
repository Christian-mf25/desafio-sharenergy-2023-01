import * as yup from "yup";

import { makeTitle } from "../utils";

const userUpdateShape = yup.object().shape({
  name: yup
    .string()
    .optional()
    .transform((str) => makeTitle(str)),
  email: yup.string().email("Invalid e-mail").lowercase().optional(),
  phone: yup
    .string()
    .optional()
    .matches(
      /^\(\d{2}\)\d{4,5}\-\d{4}$/,
      "Accepted phone format (xx)xxxxx-xxxx"
    ),
  address: yup
    .string()
    .optional()
    .transform((str) => makeTitle(str)),
  cpf: yup
    .string()
    .optional()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      "Accepted cpf format xxx.xxx.xxx-xx"
    ),
});

export default userUpdateShape;
