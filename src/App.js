import React, { useContext } from 'react';
import './style.css';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import Stats from './Stats';
import persons from './persons2';
import { PersonProvider } from './PersonContext';

export default function App() {
  return (
    <PersonProvider>
      <PersonForm />
      <Stats />
      <PersonList />
    </PersonProvider>
  );
}
