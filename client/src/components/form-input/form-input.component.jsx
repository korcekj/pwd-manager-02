import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
  FormInputHint,
} from './form-input.styles';

const FormInput = ({ handleChange, label, hint, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel shrink={otherProps.value.length ? true : false}>
          {label}
        </FormInputLabel>
      ) : null}
      {hint ? (
        <FormInputHint shrink={otherProps.value.length ? true : false}>
          {hint}
        </FormInputHint>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
