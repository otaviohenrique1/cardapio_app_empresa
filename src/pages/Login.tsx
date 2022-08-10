import { Flex } from "../components/Containers/Flex";
import { ButtonGroup, InputGroup, InputGroupText, Label } from "reactstrap";
import * as Yup from "yup";
import styled from "styled-components";
import { Formik, FormikProps, Form, ErrorMessage } from "formik";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FormInputProps, Input } from "../components/Input";
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { FaGoogle, FaApple } from "react-icons/fa";

interface FormUserTypes {
  email: string;
  senha: string;
}

const initialValues: FormUserTypes = {
  email: "",
  senha: "",
};

const validacaoSchema = Yup.object().shape({
  email: Yup.string().required("Campo email vazio"),
  senha: Yup.string().required("Campo senha vazio"),
});

type FormInputLoginProps = FormInputProps & { 
  icon: JSX.Element;
}

export function Login() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    console.log(values);
    navigate('/novo_usuario');
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      height={"100%"}
    >
      <FormContainer className="d-flex flex-column">
        <h1 className="mb-5 text-center">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validacaoSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormUserTypes>) => {
            const { errors, touched, values } = formikProps;

            const campos_formulario: FormInputLoginProps[] = [
              {
                name: "email",
                value: values.email,
                placeholder: "E-mail",
                type: "email",
                className: `form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`,
                icon: <MdOutlineAlternateEmail size={18} />
              },
              {
                name: "senha",
                value: values.senha,
                placeholder: "Senha",
                type: "password",
                className: `form-control ${(errors.senha && touched.senha) ? "rounded-0 rounded-top" : ""}`,
                icon: <MdLockOutline size={18} />
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
                    ></Label>
                    <InputGroup>
                      <InputGroupText>
                        {item.icon}
                      </InputGroupText>
                      <Input
                        name={item.name}
                        value={item.value}
                        placeholder={item.placeholder}
                        type={item.type}
                        className={item.className}
                      />
                    </InputGroup>
                    <ErrorMessage
                      name={item.name || ""}
                      component="span"
                      className="alert alert-danger rounded-0 rounded-bottom"
                    />
                  </Flex>
                ))}
                <Flex
                  justifyContent="end"
                  className="mt-2 mb-2"
                >
                  <Button
                    color="link"
                    type="button"
                  >Recuperar senha</Button>
                </Flex>
                <Button
                  color="primary"
                  type="submit"
                  className="mb-2"
                >Entrar</Button>
                <Button
                  color="danger"
                  type="reset"
                  className="mb-2"
                >Limpar campos</Button>
                <ButtonGroup className="mb-2">
                  <Button
                    color="success"
                    type="button"
                    className="p-3 d-flex align-items-center justify-content-center"
                  >
                    Entrar com
                    <FaGoogle
                      className="ms-1"
                      size={20}
                    />
                  </Button>
                  <Button
                    color="secondary"
                    type="button"
                    className="p-3 d-flex align-items-center justify-content-center"
                  >
                    Entrar com
                    <FaApple
                      className="ms-1"
                      size={20}
                    />
                  </Button>
                </ButtonGroup>
                <Link
                  to="/novo_usuario"
                  className="btn btn-link"
                >Novo Cadastro</Link>
              </Form>
            );
          }}
        </Formik>
      </FormContainer>
    </Flex>
  );
}

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;
