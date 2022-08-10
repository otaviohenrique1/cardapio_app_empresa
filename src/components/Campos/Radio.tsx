import React, { HTMLAttributes, ReactNode } from 'react'
import { Label, LabelProps } from 'reactstrap';
import styled from 'styled-components';
import { Input, InputProps } from './Input';

export type PaddingMarginStyleProps = {
  containerPaddingMarginProps?: FormInputContainerStyledProps;
};

type FormInputContainerProps = HTMLAttributes<HTMLDivElement> & FormInputContainerStyledProps;

export function FormInputContainer(props: FormInputContainerProps) {
  return (
    <FormInputContainerStyled {...props} />
  )
}

type FormInputContainerStyledProps = {
  padding_top?: string;
  padding_bottom?: string;
  padding_left?: string;
  padding_right?: string;
  margin_top?: string;
  margin_bottom?: string;
  margin_left?: string;
  margin_right?: string;
};

const FormInputContainerStyled = styled.div<FormInputContainerProps>`
  padding-top: ${(props) => props.padding_top || "0"};
  padding-bottom: ${(props) => props.padding_bottom || "0"};
  padding-left: ${(props) => props.padding_left || "0"};
  padding-right: ${(props) => props.padding_right || "0"};
  margin-top: ${(props) => props.margin_top || "0"};
  margin-bottom: ${(props) => props.margin_bottom || "0"};
  margin-left: ${(props) => props.margin_left || "0"};
  margin-right: ${(props) => props.margin_right || "0"};
`;

export type RadioProps = PaddingMarginStyleProps & {
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
};

export function Radio(props: RadioProps) {
  return (
    <FormInputContainer
      className="d-flex flex-column"
      {...props.containerPaddingMarginProps}
    >
      <Input {...props.input_props} type="radio" />
      <Label {...props.label_props} htmlFor={props.input_props.id}>
        {props.label_texto}
      </Label>
    </FormInputContainer>
  )
}
