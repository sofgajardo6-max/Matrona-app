import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Calculadoras from './pages/calculadoras'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Medicamentos from './pages/Medicamentos'
import Checklists from './pages/checklists'
import RegistroARO from './pages/checklists/checklistARO'

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
          <Route path="/uego" element={<h2>UEGO — próximamente</h2>} />
          <Route path="/cesfam" element={<h2>CESFAM — próximamente</h2>} />
          <Route path="/aro" element={<h2>ARO — próximamente</h2>} />
          <Route path="/simuv" element={<h2>SIMUV — próximamente</h2>} />
          <Route path="/binomio" element={<h2>Binomio — próximamente</h2>} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/medicamentos/obstetricia" element={<h2>Obstetricia — próximamente</h2>} />
          <Route path="/medicamentos/ginecologia" element={<h2>Ginecología — próximamente</h2>} />
          <Route path="/medicamentos/neonatologia" element={<h2>Neonatología — próximamente</h2>} />
          <Route path="/medicamentos/aro" element={<h2>ARO — próximamente</h2>} />
          <Route path="/medicamentos/urgencias" element={<h2>Urgencias — próximamente</h2>} />
          <Route path="/checklists" element={<Checklists />} />
          <Route path="/checklists/control-prenatal" element={<h2>Control Prenatal — próximamente</h2>} />
          <Route path="/checklists/trabajo-de-parto" element={<h2>Trabajo de Parto — próximamente</h2>} />
          <Route path="/checklists/puerperio" element={<h2>Puerperio — próximamente</h2>} />
          <Route path="/checklists/ARO" element={<RegistroARO />} />
          <Route path="/checklists/UEGO" element={<h2>UEGO — próximamente</h2>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App