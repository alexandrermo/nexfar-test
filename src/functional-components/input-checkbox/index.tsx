import { useField } from '@unform/core';
import React from 'react';
import { LabelStyl } from './styled';
import { InputCheckboxProps } from './types';

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  name,
  label,
  className,
  classNameIpt,
  ...rest
}: InputCheckboxProps) => {
  const { fieldName, registerField } = useField(name);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef, // acessar o input como referência
      getValue: (ref) => {
        return ref.current.checked;
      },
      setValue: (ref, value: boolean) => {
        ref.current.checked = value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <LabelStyl className={className}>
      <input
        name={name}
        className={`mr-2${classNameIpt ? ` ${classNameIpt}` : ''}`}
        type="checkbox"
        ref={inputRef}
        {...rest}
      />
      {label}
    </LabelStyl>
  );
};

export default InputCheckbox;
