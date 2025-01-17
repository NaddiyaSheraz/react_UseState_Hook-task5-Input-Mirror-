// 3. **Input Mirror**
//    - **Task**: Display real-time input from a text field.
//    - **Steps**:
//      1. Initialize state with `useState('')` for the input value.
//      2. Create an input field.
//      3. Update and display the state as the user types.

import { useState } from 'react'
import './App.css'

function App() {
  const [InputValue, setInputValue] = useState("")

  let GetFirstName = (event) =>{
    setInputValue (event.target.value);
  };

  

  return (
    <>
     <input style={{color:"#853444", width: "300px", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px", outline: "none", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", transition: "all 0.3s ease",}} type="text" onChange={GetFirstName} value={InputValue} placeholder='Write' /> <br />
     
    <p style={{color: "#CF3455", fontWeight: "bold", fontSize: "20px", marginTop: "10px",}}>you typed :{InputValue}</p>
    </>
  )
}

export default App
