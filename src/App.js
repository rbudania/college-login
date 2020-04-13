import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
         <Header/>
         <Login />
    </div>
  );
}

export default App;
