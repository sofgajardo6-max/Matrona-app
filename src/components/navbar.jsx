import { Link } from 'react-router-dom'
import { useState } from 'react'
import favicon from '/favicon.png'

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <nav style={{ background: '#c2185b', padding: '1rem', margin: '0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.25rem' }}>
  <img src={favicon} style={{ width: '80px', height: '80px' }} />
  MatronaApp
</span>     <button
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
            { to: '/checklists', label: '✅ Checklists' },
            { to: '/uego', label: '🚨 UEGO' },
            { to: '/cesfam', label: '🏥 CESFAM' },
            { to: '/aro', label: '⚠️ ARO' },
            { to: '/simuv', label: '📋 SIMUV' },
            { to: '/binomio', label: '👩‍👧 Binomio' },
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