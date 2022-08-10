import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import { ButtonGroup, Label } from 'reactstrap';
import { Button } from '../components/Button';
import { FormInputProps, Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { Flex } from '../components/Containers/Flex';
import { initialValues, validationSchema } from '../utils/constantes';
import { FormUserTypes } from '../types/AppTypes';

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
        <h1
          className="mb-5 text-center"
        >Novo Usuário</h1>
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
                id: "nome",
                value: values.nome,
                placeholder: "Nome",
                type: "text",
                className: `form-control ${(errors.nome && touched.nome) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "email",
                id: "email",
                value: values.email,
                placeholder: "E-mail",
                type: "email",
                className: `form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "senha",
                id: "senha",
                value: values.senha,
                placeholder: "Senha",
                type: "password",
                className: `form-control ${(errors.senha && touched.senha) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "confirmar_senha",
                id: "confirmar_senha",
                value: values.confirmar_senha,
                placeholder: "Confirmar senha",
                type: "password",
                className: `form-control ${(errors.confirmar_senha && touched.confirmar_senha) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "dataNascimento",
                id: "dataNascimento",
                value: values.dataNascimento,
                placeholder: "Data de nascimento",
                type: "date",
                className: `form-control ${(errors.dataNascimento && touched.dataNascimento) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "telefone",
                id: "telefone",
                value: values.telefone,
                placeholder: "Telefone/Celular",
                type: "tel",
                className: `form-control ${(errors.telefone && touched.telefone) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "cpf_cnpj",
                id: "cpf_cnpj",
                value: values.cpf_cnpj,
                placeholder: "CPF/CNPJ",
                type: "number",
                className: `form-control ${(errors.cpf_cnpj && touched.cpf_cnpj) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "rua",
                id: "rua",
                value: values.rua,
                placeholder: "Rua",
                type: "text",
                className: `form-control ${(errors.rua && touched.rua) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "complemento",
                id: "complemento",
                value: values.complemento,
                placeholder: "Complemento",
                type: "text",
                className: `form-control ${(errors.complemento && touched.complemento) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "numero",
                id: "numero",
                value: values.numero,
                placeholder: "Numero",
                type: "number",
                className: `form-control ${(errors.numero && touched.numero) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "cidade",
                id: "cidade",
                value: values.cidade,
                placeholder: "Cidade",
                type: "text",
                className: `form-control ${(errors.cidade && touched.cidade) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "estado",
                id: "estado",
                value: values.estado,
                placeholder: "Estado",
                type: "text",
                className: `form-control ${(errors.estado && touched.estado) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "pais",
                id: "pais",
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
                      id={item.id}
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
