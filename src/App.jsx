import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Calculadoras from './pages/calculadoras'
import Navbar from './components/navbar'
import Home from './pages/Home'

function App() {
  const [nombre, setNombre] = useState(localStorage.getItem('nombre') || '')

  function guardarNombre(e) {
    e.preventDefault()
    const input = e.target.nombre.value.trim()
    if (input) {
      localStorage.setItem('nombre', input)
      setNombre(input)
    }
  }

  if (!nombre) {
    return (
      <div>
        <h2>Hola! Cómo te llamas?</h2>
        <form onSubmit={guardarNombre}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <input name="nombre" placeholder="Tu nombre" />
            <button type="submit">Listo</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <HashRouter>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home nombre={nombre} />} />
          <Route path="/calculadoras" element={<Calculadoras />} />
          <Route path="/medicamentos" element={<h2>Medicamentos — próximamente</h2>} />
          <Route path="/checklists" element={<h2>Checklists — próximamente</h2>} />
          <Route path="/uego" element={<h2>UEGO — próximamente</h2>} />
          <Route path="/cesfam" element={<h2>CESFAM — próximamente</h2>} />
          <Route path="/aro" element={<h2>ARO — próximamente</h2>} />
          <Route path="/simuv" element={<h2>SIMUV — próximamente</h2>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App