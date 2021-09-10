import logo from './logo.svg';
import './App.css';
import Demo from './Demo'
import StateComponent from './StateComponent';
import {useState} from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {

 var initialProps='Bize Heryer + Trabzon' ;
 
 //props drilling

  return (
    <div> 
      <Demo data={initialProps}/>
      <StateComponent/>
      <RegisterForm/> 
    </div>
  );
}

export default App;
