import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
const ACCESS_SECRET = import.meta.env.VITE_APP_ACCESS_SECRET;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1>Petfinder React Dashboard</h1>
        <Dashboard />
    </div>
    </>
  )
}

export default App
