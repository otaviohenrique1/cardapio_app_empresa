import * as Yup from "yup";
import { FormUserTypes } from "../types/AppTypes";

export const validationSchema = Yup.object().shape({
  nome: Yup
    .string()
    .required("Campo nome vazio"),
  email: Yup
    .string()
    .required("Campo email vazio")
    .email("Email invalido"),
  senha: Yup
    .string()
    .required("Campo senha vazio")
    .min(8, "Mínimo 8 caracteres"),
  confirmar_senha: Yup
    .string()
    .required("Campo confirmação senha vazio")
    .when("senha", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("senha")],
        "As senhas não são iguais!"
      )
    }),
  telefone: Yup
    .string()
    .required("Campo telefone vazio")
    .max(11, "Máximo 11 caracteres"),
  dataNascimento: Yup
    .string()
    .required("Campo data de nascimento vazio"),
  cpf_cnpj: Yup
    .string()
    .required("Campo CPF/CNPJ vazio"),
  rua: Yup
    .string()
    .required("Campo rua vazio"),
  cidade: Yup
    .string()
    .required("Campo cidade vazio"),
  numero: Yup
    .string()
    .required("Campo numero vazio"),
  complemento: Yup
    .string()
    .required("Campo complemento vazio"),
  estado: Yup
    .string()
    .required("Campo estado vazio"),
  pais: Yup
    .string()
    .required("Campo pais vazio"),
});

export const initialValues: FormUserTypes = {
  nome: "",
  email: "",
  senha: "",
  confirmar_senha: "",
  dataNascimento: "",
  telefone: "",
  cpf_cnpj: "",
  rua: "",
  cidade: "",
  numero: "",
  complemento: "",
  estado: "",
  pais: "",
};