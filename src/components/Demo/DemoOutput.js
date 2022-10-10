import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show ? 'this is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
// this does not work for component based components
// it tells react for this component react should look at the props
// and check all the props value before and after
// if they are the same
// do NOT reevaluate the component

// this comes at a cost
// whenever the app component change
// react goes to the component and evaluates the data
// this is very costly in performance