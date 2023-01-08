import * as yup from "yup";

const userUpdateShape = yup.object().shape({
  name: yup.string().optional(),
  email: yup.string().email().lowercase().optional(),
  phone: yup.string().optional(),
  address: yup.string().optional(),
  cpf: yup.string().optional(),
});

export default userUpdateShape;
