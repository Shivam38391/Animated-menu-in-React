import { useState } from 'react'

import Header from './components/Header/Header'
import ContactButton from './components/contactButton/ContactButton'


import './App-copy.scss'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header/>

<div className="main-container" id="main-container">
  <h1>Bleu <br /> Blanc <br />studio</h1>
</div>

<ContactButton/>

    </>
  )
}

export default App
