import { useState } from 'react';

import { ObjectAny } from 'interfaces';

interface Params {
  initialValues: ObjectAny;
  validations: ObjectAny;
  onSubmit: (values: ObjectAny) => void;
}

export const useForm = ({ initialValues, validations, onSubmit }: Params) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState<ObjectAny>({});

  const handleChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [key]: e.target.value });
    };

  const handleSubmit = () => {
    let valid = true;
    const newErrors: ObjectAny = {};

    if (validations) {
      for (const key in validations) {
        const value = values[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation.required.message;
        }

        if (
          validation?.pattern?.value &&
          !validation.pattern.value.test(value)
        ) {
          valid = false;
          newErrors[key] = validation.pattern.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});
    onSubmit(values);
  };

  const cleanForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    handleChange,
    handleSubmit,
    cleanForm,
    errors,
  };
};
