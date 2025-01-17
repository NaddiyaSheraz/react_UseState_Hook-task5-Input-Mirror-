// 3. **Input Mirror**
//    - **Task**: Display real-time input from a text field.
//    - **Steps**:
//      1. Initialize state with `useState('')` for the input value.
//      2. Create an input field.
//      3. Update and display the state as the user types.

import { useState } from 'react'
import './App.css'

function App() {
  const [InputValue, setInputValue] = useState("nil")

  let GetFirstName = (event) =>{
    setInputValue (event.target.value);
  };

  

  return (
    <>
     <input type="text" onChange={GetFirstName} value={InputValue} placeholder='Enter your FirtName' /> <br />
     
    <p>you typed :{InputValue}</p>
    </>
  )
}

export default App
