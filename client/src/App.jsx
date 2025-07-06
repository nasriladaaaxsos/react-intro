import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './components/HomeComponent'
import MainComponent from './components/MainComponent'

function App() {
  const [currentMsg, setCurrentMsg] = useState(["No fruit"])
  

  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  return (
    <>
      <HomeComponent newMessage={ youveGotMail  }/>
      <MainComponent   message= {currentMsg} />
    </>
  )
}

export default App
