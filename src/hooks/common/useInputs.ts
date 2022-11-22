import { ChangeEvent, useState } from 'react';

const useInputs = (initialValue: object) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const reset = () => setForm(initialValue);

  return [form, handleChange, reset];
};

export default useInputs;
