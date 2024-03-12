import logo from './logo.svg';
import './App.css';

import React from 'react';
import Button from './Button';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello World</code>
        </p>
        <p>
        <Button onClick={() => alert('Кнопка нажата!')}>Click me</Button>
        </p>
      </header>
    </div>
  );
}
export default App;



/*function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <h1>Hello, World!</h1>
        <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      </Container>
    </div>
  );
}

export default App;
*/
