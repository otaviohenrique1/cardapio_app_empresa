import { Field } from 'formik';
import { OptionHTMLAttributes, ReactNode } from 'react';
import { InputProps } from './Input'

export type SelectProps = {
  inputProps: InputProps;
  optionProps: OptionHTMLAttributes<HTMLOptionElement>;
  label_item_vazio?: ReactNode;
  data: any[];
};

export type CampoSelectItemBaseTypes = {
  valor: string | ReadonlyArray<string> | number;
  texto: string | number;
}

export default function Select(props: SelectProps) {
  return (
    <Field as="select" {...props.inputProps} >
      <option value="">{props.label_item_vazio}</option>
      <option {...props.optionProps}></option>
    </Field>
  )
}
