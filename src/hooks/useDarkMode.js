import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
import '../../public/index.html';


const useDarkMode = (key) => {

    const [something, setSomething] = useLocalStorage(key);
  
    useEffect(() => {
      console.log('let us see if there is something in localstorage like ' + key);
      return 
      setSomething( key ? window.body.addClassName = ('dark-mode') : window.body.addClassName = (''));   
    },[key]);
  
    return [something, setSomething];
    }