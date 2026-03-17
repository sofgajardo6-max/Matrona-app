import { useState } from 'react'
import tablaAU from '../assets/tablaAU.png'
import PercentilPesoFetal from '../assets/percentilPesoFetal.jpg'

const estiloCard = {
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  padding: '1.5rem',
  marginTop: '1rem',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
}

const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

const PESO_FETAL = {
  20: '250 - 350 g',
  24: '550 - 700 g',
  28: '900 - 1100 g',
  32: '1500 - 1800 g',
  36: '2200 - 2700 g',
  40: '3000 - 3600 g'
}

function pesoRango(semanas) {
  if (semanas < 20) return 'Menos de 20 semanas — referir a tabla MINSAL'
  const clave = [20,24,28,32,36,40].find(s => semanas <= s)
  return clave ? PESO_FETAL[clave] : '3000 - 3600 g'
}

function formatearFecha(fecha) {
  return `${fecha.getDate()} de ${MESES[fecha.getMonth()]} ${fecha.getFullYear()}`
}

function formatearInput(valor) {
  const nums = valor.replace(/\D/g, '').slice(0, 8)
  if (nums.length <= 2) return nums
  if (nums.length <= 4) return `${nums.slice(0,2)}-${nums.slice(2)}`
  return `${nums.slice(0,2)}-${nums.slice(2,4)}-${nums.slice(4)}`
}

function parsearFecha(str) {
  const partes = str.split('-')
  if (partes.length !== 3 || partes[2].length !== 4) return null
  const fecha = new Date(`${partes[2]}-${partes[1]}-${partes[0]}T00:00:00`)
  return isNaN(fecha) ? null : fecha
}

function Calculadoras() {
  const [fur, setFur] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  function calcular() {
    const fechaFur = parsearFecha(fur)
    if (!fechaFur) {
      setError('Ingresa una fecha válida, ej: 10112025')
      return
    }
    setError('')

    const hoy = new Date()
    const diasTotales = Math.floor((hoy - fechaFur) / (1000 * 60 * 60 * 24))
    const semanas = Math.floor(diasTotales / 7)
    const dias = diasTotales % 7

    const fpp = new Date(fechaFur)
    fpp.setDate(fpp.getDate() + 280)
    const diasFaltan = Math.floor((fpp - hoy) / (1000 * 60 * 60 * 24))

    let trimestre
    if (semanas < 14) trimestre = '1er trimestre'
    else if (semanas < 28) trimestre = '2do trimestre'
    else trimestre = '3er trimestre'

    let ganancia
    if (semanas < 12) ganancia = 'Sin ganancia significativa aún'
    else if (semanas < 20) ganancia = '1 - 3 kg'
    else if (semanas < 28) ganancia = '4 - 7 kg'
    else if (semanas < 36) ganancia = '7 - 10 kg'
    else ganancia = '9 - 12 kg'
    
    let au
    if (semanas < 12) au = 'No palpable aún'
    else au = `${semanas - 2} - ${semanas + 2} cm`

    setResultado({ semanas, dias, fpp, diasFaltan, trimestre, ganancia, au, peso: pesoRango(semanas) })
  }

  return (
    <div style={estiloCard}>
      <h2>🧮 Calculadora Obstétrica</h2>
      <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '-0.5rem' }}>
        Primer día de la última regla (FUR) dia-mes-año
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <input
          type="text"
          placeholder="10112025"
          value={fur}
          onChange={(e) => setFur(formatearInput(e.target.value))}
          onKeyDown={(e) => e.key === 'Enter' && calcular()}
        />
        {error && <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>}
        <button onClick={calcular}>Calcular</button>
      </div>

      {resultado && (
        <div style={{ marginTop: '1.5rem', textAlign: 'left', display: 'inline-block' }}>
          <p>📅 <strong>Edad gestacional:</strong> {resultado.semanas} sem {resultado.dias} días</p>
          <p>🗓️ <strong>FPP:</strong> {formatearFecha(resultado.fpp)} {resultado.diasFaltan > 0 ? `(faltan ${resultado.diasFaltan} días)` : '(ya llegó la FPP)'}</p>
          <p>🤰 <strong>Trimestre:</strong> {resultado.trimestre}</p>
          <p>⚖️ <strong>Ganancia de peso esperada:</strong> {resultado.ganancia}</p>
          <p>📏 <strong>AU estimada:</strong> {resultado.au}</p>
          <p>👶 <strong>Peso fetal (rango referencial):</strong> {resultado.peso}</p>
          <img src={tablaAU} alt="Tabla altura uterina" style={{ maxWidth: '500px', width: '120%', height: 'auto', borderRadius: '8px', marginTop: '1rem' }} />
         <img src={PercentilPesoFetal} alt="Tabla peso fetal" style={{ maxWidth: '500px', width: '100%', height: 'auto', borderRadius: '8px', marginTop: '1rem' }} />
         </div>
      )}
    </div>
  )
}

export default Calculadoras