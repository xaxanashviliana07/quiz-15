import { useState, useEffect } from 'react'
import Dice from './assets/images/icon-dice.svg'
import Divider from "./assets/images/pattern-divider-desktop.svg"
import './App.css'

function App() {
  const [adviceText, setAdviceText] = useState([])
  const fetchAdvice = async () => {
   fetch('https://api.adviceslip.com/advice')
     .then(response => {
      return response.json()
     })
     .then(data => {
      setAdviceText(data.slip)
     })
    
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <>
      <div className='card'>
        <h1>Advice # {adviceText.id}</h1>  
        <div className='advice'>
          <p>{adviceText.advice}</p>
        </div>
        <div>
          <img className='dividerimg' src={Divider}/>
        </div>
        <div>
          <button onClick={fetchAdvice}>
            <img src={Dice}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
//{adviceText.slip.id}
//{adviceText.slip.advice}
//https://api.adviceslip.com/advice
