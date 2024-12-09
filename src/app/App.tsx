import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ФИО: Ушаков Иван Сергеевич

          Каких целей хотите достичь: Освоить новые технологии, научиться работать с фронтом на React, повысить квалификацию, применить навыки на работе.
          Какими технологиями уже владею: html, css, js.
          О себе и своём опыте: разработчик Siebel CRM с 8-летним стажем.
        </p>
      </header>
    </div>
  );
}

export default App;
