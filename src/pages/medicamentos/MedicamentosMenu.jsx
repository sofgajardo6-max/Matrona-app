import { useNavigate } from 'react-router-dom'

const categorias = [
  {
    to: '/medicamentos/pre-parto',
    emoji: '🤰',
    titulo: 'Pre-Parto',
    descripcion: 'Medicamentos para el manejo de pre-parto',
    gradiente: 'linear-gradient(135deg, #c2185b, #e91e8c)'
  },
  {
    to: '/medicamentos/ginecologia',
    emoji: '🌸',
    titulo: 'Ginecología',
    descripcion: 'Medicamentos ginecológicos',
    gradiente: 'linear-gradient(135deg, #7b1fa2, #ab47bc)'
  },
  {
    to: '/medicamentos/neonatologia',
    emoji: '👶',
    titulo: 'Neonatología',
    descripcion: 'Medicamentos para el recién nacido',
    gradiente: 'linear-gradient(135deg, #1565c0, #42a5f5)'
  },
  {
    to: '/medicamentos/aro',
    emoji: '⚠️',
    titulo: 'ARO',
    descripcion: 'Medicamentos de alto riesgo obstétrico',
    gradiente: 'linear-gradient(135deg, #e65100, #ff9800)'
  },
  {
    to: '/medicamentos/urgencias',
    emoji: '🚨',
    titulo: 'Urgencias',
    descripcion: 'Medicamentos de uso en urgencias',
    gradiente: 'linear-gradient(135deg, #b71c1c, #ef5350)'
  },
]

function Medicamentos() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>💊 Medicamentos</h2>
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

export default Medicamentos