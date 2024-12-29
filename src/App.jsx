import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import './App.css'
import NavBar from './components/nav/navbar'

function App() {

  return (
    <div>
      <header>
        <h1>Page Title</h1> {/* Page title should go here */}
        <NavBar/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
