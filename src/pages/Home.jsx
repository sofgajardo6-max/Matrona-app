import { useNavigate } from 'react-router-dom'

const cards = [
  {
    to: '/calculadoras',
    emoji: '🤰',
    titulo: 'Calculadora Obstétrica',
    descripcion: 'FPP, edad gestacional, altura uterina y más',
    color: '#4d192e',
    gradiente: 'linear-gradient(135deg, #b60a0a, #f13f83)'
  },
  {
    to: '/medicamentos',
    emoji: '💊',
    titulo: 'Medicamentos',
    descripcion: 'Dosis y referencias de medicamentos frecuentes',
    color: '#1565c0',
    gradiente: 'linear-gradient(135deg, #204064, #42a5f5)'
  },
  {
    to: '/checklists',
    emoji: '✅',
    titulo: 'Checklists',
    descripcion: 'Listas de verificación para cada situación clínica',
    color: '#7b1fa2',
    gradiente: 'linear-gradient(135deg, #3b0e4e, #ab47bc)'
  }
]

function Home({ nombre }) {
  const navigate = useNavigate()

  const listaMensajes = [
    `Vas a ser una matrona increíble ${nombre}!`,
    `Un turno a la vez ${nombre} 💪`,
    `Hoy vas a aprender algo nuevo ${nombre}!`,
    `Tú puedes con esto y más ${nombre} 🩺`,
    `Animo, no te rindas ${nombre}!`,
    `Cada día estas más cerca de ser una increíble matrona ${nombre}!`,
    `Recuerda cuidar de ti también ${nombre} 💖`,
    `Cada experiencia te hace mejor ${nombre}!`,
    `${nombre}, mantén la calma y sigue adelante, lo estás haciendo genial!`,
    `Eres muy inteligente, no te rindas!`,
    `Un paso a la vez ${nombre}, estás haciendo un gran trabajo!`,
    `${nombre}, Hoy hiciste la diferencia en la vida de alguien!`,
    `Confía en tus conocimientos, ${nombre}, estás preparada para esto!`,
    `Cada día más cerca del titulo 🙏`
  ]

  const mensajeAleatorio = listaMensajes[Math.floor(Math.random() * listaMensajes.length)]

  return (
    
    <div style={{ padding: '1.5rem', minHeight: '100vh' }}>
      
      {/* CARD TRANSPARENTE SOLO PARA EL MENSAJE */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.4)', // Muy transparente
        backdropFilter: 'blur(12px)', // El efecto de desenfoque aesthetic
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '24px',
        padding: '2rem',
        marginBottom: '2.5rem',
        maxWidth: '850px',
        margin: '0 auto 2.5rem auto',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '1.6rem', margin: 0, color: '#333' }}>
          {mensajeAleatorio}
        </h1>
        <p style={{ color: '#555', marginTop: '0.8rem', fontSize: '0.95rem' }}>
          ¿Qué necesitas hoy? 🌹
        </p>
      </div>

      {/* REJILLA DE CARDS NORMALES */}
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