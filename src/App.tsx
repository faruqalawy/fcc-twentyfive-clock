import { useState } from 'react'
import './App.css'

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>25 + 5 Clock - by Faruq</h1>
      
      <div id="break-label">Lama Istirahat</div>
      <button id="break-increment">+</button>
      <button id="break-decrement">-</button>

      <div id="session-label">Lama Sesi</div>
      <button id="session-increment">+</button>
      <button id="session-decrement">-</button>
    </>
  )
}

export default App
