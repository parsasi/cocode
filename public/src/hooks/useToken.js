import React , { useState } from 'react'

//  const [token , setToken] = useToken()


export function useToken() {

    const itemName = 'auth'
    
    const [storedValue, setStoredValue] = useState(() => {
      try {

        const item = window.localStorage.getItem(itemName);

        return item ? item : false;
      } 
      catch (error) {
        return false
      }
    })

    const setValue = value => {
        try {

        const valueToSave = `bearer ${value}`
          // Save state

          setStoredValue(value);
          // Save to local storage
          window.localStorage.setItem(itemName, valueToSave);
        } catch (error) {
          console.log(error);
        }
      };

    return [storedValue , setValue]
}
