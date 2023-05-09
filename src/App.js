import './App.css';
import React, { useState } from 'react';
// import components
import Box from './components/Box';
import Form from './components/Form';


function App() {
  // Global state
  // this is where you set the default values for the state
  const [boxes, setBoxes] = useState([
    {
      color: 'Blue'
    },
    {
      color: 'Red'
    },
    {
      color: 'Green'
    }
  ])
  // add new box and update state
  const addBox = (formInput) => {
    // console.log("you clicked add box", formInput);
    setBoxes([...boxes, { color: formInput }]);
  }
  return (
    <fieldset>
      {/* <legend>app.js</legend> */}
      <h1>Boxes 📦</h1>
      {/* see them as objs */}
      {/* {
        JSON.stringify(boxes)
      } */}
      <hr />
      <Form addBox={addBox} />
      {
        // iterate over the boxes or any object in the array
        boxes.map((boxObj, index) => {
          return (
            // every obj in the array is a needs a key set that key to index
            <Box key={index} boxObj={boxObj} />
          )
        })
      }
    </fieldset >
  );
}
export default App;
