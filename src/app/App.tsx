import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ФИО: Ушаков Иван Сергеевич<br/>
          Каких целей хотите достичь: Освоить новые технологии, научиться работать с фронтом на React, повысить квалификацию, применить навыки на работе.<br/>
          Какими технологиями уже владею: html, css, js.<br/>
          О себе и своём опыте: разработчик Siebel CRM с 8-летним стажем.
        </p>
      </header>
    </div>
  );
}

export default App;