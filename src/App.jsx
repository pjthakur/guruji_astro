import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AnimatePresence } from "framer-motion";
import './App.css'
// import MultiStepForm from './components/MultiStepForm'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimatePresence mode='wait'>
      <div className='App'>
        <Form/>
      </div>
      </AnimatePresence>
      
    </>
  )
}

export default App
