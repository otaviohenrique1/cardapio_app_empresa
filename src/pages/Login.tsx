import { Flex } from "../components/Containers/Flex";
import { Button, ButtonGroup } from "reactstrap";
import * as Yup from "yup";
import styled from "styled-components";
import { Formik, FormikProps, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "../components/Input";

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

            return (
              <Form className="d-flex flex-column">
                <FormInput
                  name="email"
                  value={values.email}
                  placeholder="E-mail"
                  type="email"
                  className={`form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`}
                  containerPaddingMarginProps={{
                    margin_bottom: "10px"
                  }}
                />
                <FormInput
                  name="email"
                  value={values.email}
                  placeholder="E-mail"
                  type="email"
                  className={`form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`}
                  containerPaddingMarginProps={{
                    margin_bottom: "10px"
                  }}
                />
                <Button
                  color="link"
                  className="mt-2"
                  type="button"
                >Recuperar senha</Button>
                <ButtonGroup>
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
