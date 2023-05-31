import React, { useId, useState, createContext, useReducer } from 'react';
import persons from './persons2';

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [persons, setPersons] = useState(persons);

  const addPerson = (person) => {
    setPersons([...users, user]);
  };

  return (
    <PersonContext.Provider value={{ persons, addPerson }}>
      {children}
    </PersonContext.Provider>
  );
};
