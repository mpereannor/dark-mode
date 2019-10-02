import React, {useState} from 'react';

//create useLocalStorage 
// useLocalStorage uses useState


const useLocalStorage = (key, initialValue) => {

    //default/initial value
  
    const[storedValue, setStoredValue] = useState(() =>{
      const valueLocalStorage = localStorage.getItem(key);
  
      return valueLocalStorage ? JSON.parse(valueLocalStorage)
      : initialValue
    });
  
    //updated value
    const updatedValue = update => {
      setStoredValue(update);
      localStorage.setItem(key, JSON.stringify(update));
    };
  
    return [storedValue, updatedValue]
  }
  
  export default useLocalStorage;
  