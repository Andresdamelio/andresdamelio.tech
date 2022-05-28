import React from 'react';
import styles from './Input.module.css';

interface Props {
  tag: string;
  type: string;
  name: string;
  placeholder: string;
  ariaLabel: string;
  value: string;
  changeHandler: (
    name: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  properties?: any;
}

const Input = ({
  tag,
  type,
  placeholder,
  ariaLabel,
  value,
  name,
  changeHandler,
  properties,
}: Props) => {
  const element = React.createElement<Element>(tag);
  return (
    <element.type
      type={type}
      className={
        'dark:text-black-300 dark:placeholder-black-300 dark:focus:bg-azure-100 ' +
        styles.input
      }
      placeholder={placeholder}
      aria-label={ariaLabel}
      value={value}
      onChange={changeHandler(name)}
      {...properties}
    ></element.type>
  );
};

export default Input;
