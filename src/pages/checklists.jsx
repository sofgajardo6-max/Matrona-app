import { useNavigate } from 'react-router-dom'

const categorias = [
  {
    to: '/checklists/control-prenatal',
    emoji: '🤰',
    titulo: 'Control Prenatal',
    descripcion: 'Checklist para control prenatal normal',
    gradiente: 'linear-gradient(135deg, #c2185b, #e91e8c)'
  },
  {
    to: '/checklists/trabajo-de-parto',
    emoji: '🏥',
    titulo: 'Trabajo de Parto',
    descripcion: 'Checklist para manejo del trabajo de parto',
    gradiente: 'linear-gradient(135deg, #7b1fa2, #ab47bc)'
  },
  {
    to: '/checklists/puerperio',
    emoji: '👶',
    titulo: 'Puerperio',
    descripcion: 'Checklist para control del puerperio',
    gradiente: 'linear-gradient(135deg, #1565c0, #42a5f5)'
  },
  {
    to: '/checklists/ARO',
    emoji: '🚨',
    titulo: 'ARO',
    descripcion: 'Checklist para ARO',
    gradiente: 'linear-gradient(135deg, #b71c1c, #ef5350)'
  },
    {
    to: '/checklists/UEGO',
    emoji: '🏥',
    titulo: 'UEGO',
    descripcion: 'Checklist para UEGO',
    gradiente: 'linear-gradient(135deg, #561672, #b94dcc)'
  },
]

function Checklists() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>✅ Checklists</h2>
      <p style={{ color: '#888', marginBottom: '2rem' }}>Selecciona una categoría</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {categorias.map(cat => (
          <div
            key={cat.to}
            onClick={() => navigate(cat.to)}
            style={{
              background: cat.gradiente,
              borderRadius: '16px',
              padding: '1.5rem',
              cursor: 'pointer',
              color: 'white',
              textAlign: 'left',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.emoji}</div>
            <h3 style={{ color: 'white', margin: '0 0 0.25rem 0' }}>{cat.titulo}</h3>
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.85rem' }}>{cat.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checklists