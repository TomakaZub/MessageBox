import React from "react"
import "../styles/App.css"
import Header from "../components/Header"
import MessageForm from "../components/MessageForm"
import MessageList from "../components/MessageList"
import CreateMessage from "../components/CreateMessage"
import CreateProfil from "../components/CreateProfil"

import firebase, { FirebaseContext } from "./../firebase"
import useAuth from "../hooks/useAuth"

const App = () => {
  const user = useAuth()
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <div className='app'>
        <Header />
        <CreateMessage />
        <MessageList />
        {/* <CreateProfil /> */}
      </div>
    </FirebaseContext.Provider>
  )
}

export default App
