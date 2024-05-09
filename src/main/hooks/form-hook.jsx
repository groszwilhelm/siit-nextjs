import { useState } from 'react';

export function useForm(type, id, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: (event) => setValue(event.target.value),
    id,
    type
  }
}