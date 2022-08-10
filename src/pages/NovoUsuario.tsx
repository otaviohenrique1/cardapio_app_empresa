import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import { ButtonGroup, Label } from 'reactstrap';
import { Button } from '../components/Button';
import { FormInputProps, Input } from '../components/Input';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { Flex } from '../components/Containers/Flex';

interface FormUserTypes {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
  telefone: string;
  cpf_cnpj: string;
  rua: string;
  cidade: string;
  numero: string;
  complemento: string;
  estado: string;
  pais: string;
}

const validationSchema = Yup.object().shape({
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

const initialValues: FormUserTypes = {
  nome: "",
  email: "",
  senha: "",
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

export function NovoUsuario() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    console.log(values);
    navigate('/');
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="start"
      width={"100%"}
      height={"100%"}
      paddingTop="50px"
    >
      <Flex
        flexDirection="column"
        width="100%"
        maxWidth="500px"
      >
        <h1 className="mb-5 text-center">NovoUsuario</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormUserTypes>) => {
            const { errors, touched, values } = formikProps;

            const campos_formulario: FormInputProps[] = [
              {
                name: "nome",
                value: values.nome,
                placeholder: "Nome",
                type: "text",
                className: `form-control ${(errors.nome && touched.nome) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "email",
                value: values.email,
                placeholder: "E-mail",
                type: "email",
                className: `form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "senha",
                value: values.senha,
                placeholder: "Senha",
                type: "password",
                className: `form-control ${(errors.senha && touched.senha) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "dataNascimento",
                value: values.dataNascimento,
                placeholder: "Data de nascimento",
                type: "date",
                className: `form-control ${(errors.dataNascimento && touched.dataNascimento) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "telefone",
                value: values.telefone,
                placeholder: "Telefone/Celular",
                type: "tel",
                className: `form-control ${(errors.telefone && touched.telefone) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "cpf_cnpj",
                value: values.cpf_cnpj,
                placeholder: "CPF/CNPJ",
                type: "number",
                className: `form-control ${(errors.cpf_cnpj && touched.cpf_cnpj) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "rua",
                value: values.rua,
                placeholder: "Rua",
                type: "text",
                className: `form-control ${(errors.rua && touched.rua) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "complemento",
                value: values.complemento,
                placeholder: "Complemento",
                type: "text",
                className: `form-control ${(errors.complemento && touched.complemento) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "numero",
                value: values.numero,
                placeholder: "Numero",
                type: "number",
                className: `form-control ${(errors.numero && touched.numero) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "cidade",
                value: values.cidade,
                placeholder: "Cidade",
                type: "text",
                className: `form-control ${(errors.cidade && touched.cidade) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "estado",
                value: values.estado,
                placeholder: "Estado",
                type: "text",
                className: `form-control ${(errors.estado && touched.estado) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "pais",
                value: values.pais,
                placeholder: "Pais",
                type: "text",
                className: `form-control ${(errors.pais && touched.pais) ? "rounded-0 rounded-top" : ""}`,
              },
            ];

            return (
              <Form className="d-flex flex-column">
                {campos_formulario.map((item, index) => (
                  <Flex
                    key={index}
                    flexDirection="column"
                    marginBottom="15px"
                  >
                    <Label
                      className="mb-0"
                    >{item.placeholder}</Label>
                    <Input
                      name={item.name}
                      value={item.value}
                      placeholder={item.placeholder}
                      type={item.type}
                      className={item.className}
                    />
                    <ErrorMessage
                      name={item.name || ""}
                      component="span"
                      className="alert alert-danger rounded-0 rounded-bottom"
                    />
                  </Flex>
                ))}
                <ButtonGroup className="mb-5 mt-3">
                  <Button
                    color="primary"
                    className="mt-2"
                    type="submit"
                  >Entrar</Button>
                  <Button
                    color="danger"
                    className="mt-2"
                    type="reset"
                  >Limpar</Button>
                  <Button
                    color="secondary"
                    className="mt-2"
                    type="button"
                    onClick={() => navigate("/")}
                  >Voltar</Button>
                </ButtonGroup>
              </Form>
            );
          }}
        </Formik>
      </Flex>
    </Flex>
  )
}
