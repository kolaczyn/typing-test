import { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => localStorage.getItem(key));

  const setValueWrapper = (newValue) => {
    if (value === newValue) return;
    localStorage.setItem(key, newValue);
    setValue(newValue);
  }

  useEffect(() => {
    console.log(value)
  }, [value]);

  // useEffect(() => {
  //   const handler = () => {
  //     value !== localStorage.getItem(key) && setValue(localStorage.getItem(key))
  //   };
  //   window.addEventListener('storage', handler);
  //   return () => window.removeEventListener('storage', handler);
  // }, [key]);

  return { value, setValue: setValueWrapper };
}

export default useLocalStorage;