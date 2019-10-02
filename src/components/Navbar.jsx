import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;


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


//create useDarkMode
//useDarkMode uses useLocalStorage 

const useDarkMode = (key) => {

  const [something, setSomething] = useLocalStorage(key);

  useEffect(() => {
    console.log('let us see if there is something in localstorage like ' + key);
    return 
    setSomething( key ? body.addClassName = ('dark-mode') : body.addClassName = (''));   
  },[key]);

  return [something, setSomething];
  }
}

useEffect(() => {
  console.log('Let us see if there is something in ls like ' + key);
}, [key]);

const useInput = (key, initialValue) => {
  const [inputValue, setInputValue] = useLocalStorage(key, initialValue);

  const onInputChange = evt => {
    setInputValue(evt.target.value);
  };

  return [inputValue, onInputChange];
};
