import { useNavigate } from 'react-router-dom'

const cards = [
  {
    to: '/calculadoras',
    emoji: '🤰',
    titulo: 'Calculadora Obstétrica',
    descripcion: 'FPP, edad gestacional, altura uterina y más',
    color: '#c2185b',
    gradiente: 'linear-gradient(135deg, #c2185b, #e91e8c)'
  },
  {
    to: '/medicamentos',
    emoji: '💊',
    titulo: 'Medicamentos',
    descripcion: 'Dosis y referencias de medicamentos frecuentes',
    color: '#1565c0',
    gradiente: 'linear-gradient(135deg, #1565c0, #42a5f5)'
  },
  {
    to: '/checklists',
    emoji: '✅',
    titulo: 'Checklists',
    descripcion: 'Listas de verificación para cada situación clínica',
    color: '#7b1fa2',
    gradiente: 'linear-gradient(135deg, #7b1fa2, #ab47bc)'
  }
]

function Home({ nombre }) {
  const navigate = useNavigate()
  const mensajeAleatorio = [
    `Vas a ser una matrona increíble, ${nombre}! 🌟`,
    `Un turno a la vez, ${nombre} 💪`,
    `Cada día estás más cerca, ${nombre}! 🩺`,
    `Tú puedes con esto y más, ${nombre} 💖`,
  ][Math.floor(Math.random() * 4)]

  return (
    <div style={{ padding: '1.5rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{mensajeAleatorio}</h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>¿Qué necesitas hoy? 🌹</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {cards.map(card => (
          <div
            key={card.to}
            onClick={() => navigate(card.to)}
            style={{
              background: card.gradiente,
              borderRadius: '16px',
              padding: '2rem',
              cursor: 'pointer',
              color: 'white',
              textAlign: 'left',
              boxShadow: `0 4px 20px ${card.color}44`,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = `0 8px 30px ${card.color}66`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = `0 4px 20px ${card.color}44`
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{card.emoji}</div>
            <h2 style={{ color: 'white', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{card.titulo}</h2>
            <p style={{ margin: 0, opacity: 0.85, fontSize: '0.9rem' }}>{card.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home