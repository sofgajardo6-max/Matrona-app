import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav style={{ background: '#c2185b', padding: '1rem', margin: '0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'white', fontWeight: 'bold' }}>🩺 MatronaApp</span>
        <button
          onClick={() => setAbierto(!abierto)}
          style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          ☰
        </button>
      </div>

      {abierto && (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '1rem' }}>
    {[
      { to: '/', label: '🏠 Inicio' },
      { to: '/calculadoras', label: '🧮 Calculadoras' },
      { to: '/checklists', label: '✅ Checklists' },
      { to: '/medicamentos', label: '💊 Medicamentos' },
    ].map(({ to, label }) => (
      <Link
        key={to}
        to={to}
        onClick={() => setAbierto(false)}
        style={{ color: 'white', textDecoration: 'none', padding: '4px 8px', borderRadius: '6px' }}
        onMouseEnter={e => e.target.style.backgroundColor = '#ad1457'}
        onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
      >
        {label}
      </Link>
    ))}
  </div>
)}
    </nav>
  )
}

export default Navbar