import { useState } from 'react'
import Base from './components/Base/Base.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Base />
    </>
  )
}

export default App;
