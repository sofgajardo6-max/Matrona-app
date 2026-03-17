import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import mensajes from './data/mensajes'
import Calculadoras from './pages/calculadoras'
import Navbar from './components/navbar'

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

  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)].replace('{nombre}', nombre)

  return (
    <HashRouter>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<h1>{mensajeAleatorio}</h1>} />
          <Route path="/calculadoras" element={<Calculadoras />} />
          <Route path="/checklists" element={<h2>Checklists — próximamente</h2>} />
          <Route path="/medicamentos" element={<h2>Medicamentos — próximamente</h2>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App