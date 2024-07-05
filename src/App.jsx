import { useState } from 'react'

import { AnimatePresence, motion } from "framer-motion";
import './App.css'

import Form from './components/Form'

function App() {

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
