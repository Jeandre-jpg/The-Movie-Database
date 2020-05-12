import React from 'react';
import './App.css';
import { Name, Surname, Counter } from './components/Name';

export default function App() {
  return (
    <div>
      <h1>
      This is where I will import my Name Component
      </h1>
      <Name />
      <Surname />
      <div>
        This will be another Component
      </div>
      <Counter />
    </div>
  );
}


