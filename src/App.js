import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph)
    }
  }, [allowToggle]);

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph(prevShowParagraph => !prevShowParagraph)
  //   }
  // }, []);

  // if we use the handler with allowToggle like this, not adding it to the dependencies
  // then the value of allowToggle would never change because functions in javascript 
  // are closures, which means that the function is saved in javascript memory
  // with the previous allowToggle value

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  // the fact that state changes, makes the function component to re run and then
  // it makes the DOM to gain a new paragraph node

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
    </div>
  );
}

export default App;
