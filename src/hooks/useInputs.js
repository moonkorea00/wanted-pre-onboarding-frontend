import { useState } from 'react';

const useInputs = initialValue => {
  const [form, setForm] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  return { form, handleChange };
};

export default useInputs;
