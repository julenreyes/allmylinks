import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Julen Reyes</h1>
        <div className="links">
          <LinkButton text="X - Twitter" url="https://x.com/juulenreyes"/>
          <LinkButton text="Instagram" url="https://www.instagram.com/juulenreyes/"/>

          <LinkButton text="El mejor contenido 🔞" url="https://onlyfans.com/juulenreyes"/>
        </div>
        <div className="social-media">
          <a href="https://x.com/juulenreyes">
            <img src="assets/x.jpg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/juulenreyes/">
            <img src="assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://onlyfans.com/juulenreyes">
            <img src="assets/only.png" alt="Only" />
          </a>
        </div>
      </div>
    </div>
  );
}

function LinkButton({ text, url }) {
  return (
    <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default App;