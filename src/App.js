import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState();

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  };

  // the fact that state changes, makes the function component to re run and then
  // it makes the DOM to gain a new paragraph node

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
