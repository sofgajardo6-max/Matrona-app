import { useState, useEffect } from 'react'

const procedimientos = [
  "Ingreso de gestante a la unidad",
  "Análisis de antecedentes de la gestante (Ficha y carné de control de embarazo)",
  "Anamnesis",
  "Examen físico general y segmentario",
  "Interpretación de signos vitales",
  "Examen físico de mamas orientado a lactancia materna",
  "Maniobras de Leopold",
  "Auscultación de latidos cardiofetales con sonicaid",
  "Auscultación de latidos cardiofetales con pinard",
  "Control Dinámica uterina",
  "Mensuración",
  "Especuloscopia",
  "Tacto vaginal",
  "Interpretación de exámenes de laboratorio",
  "Instalación de RBNE",
  "Interpretación de RBNE",
  "Preparación de sueros",
  "Instalación de vía venosa",
  "Toma de exámenes de sangre",
  "Manejo de insulinoterapia",
  "Hemoglucotest",
  "Administración de medicamentos vía oral",
  "Administración de medicamentos endovenosos",
  "Administración de medicamentos intramuscular",
  "Preparación preoperatoria",
  "Proceso de alta de la usuaria",
  "Colaboración en procedimientos médicos (ECO-AMCT-Examen médico)",
  "Participación en Visita Médica",
  "Entrega/presenta casos clínicos de usuarias",
  "Coordinación con otras unidades (NEO-Pabellón-Prepartos-Laboratorio-Otro)",
  "Coordinación con equipo clínico (médico/matrona/TENS/auxiliar de servicio)",
  "Realiza registros clínico-administrativos propios de la unidad",
]

const dias = ["Mar", "Mié", "Jue", "Vie"]

function RegistroARO() {
  const [registro, setRegistro] = useState(() => {
    const guardado = localStorage.getItem('registroARO')
    return guardado ? JSON.parse(guardado) : {}
  })
  const [diaSeleccionado, setDiaSeleccionado] = useState(null)

  useEffect(() => {
    localStorage.setItem('registroARO', JSON.stringify(registro))
  }, [registro])

  function toggle(proc, diaIndex) {
    const key = `${proc}-${diaIndex}`
    setRegistro(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function getTotal(proc) {
    return dias.filter((_, i) => registro[`${proc}-${i}`]).length
  }

  function borrarTodo() {
    if (window.confirm('¿Borrar todo el registro de la semana?')) {
      setRegistro({})
      localStorage.removeItem('registroARO')
    }
  }

return (
  <div style={{ padding: '1rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
      <h2>📋 Registro ARO</h2>
      <button onClick={borrarTodo} style={{ background: '#b71c1c', fontSize: '0.85rem', padding: '6px 12px' }}>
        Limpiar semana
      </button>
    </div>

    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
      {dias.map((d, i) => (
        <button
          key={d}
          onClick={() => setDiaSeleccionado(diaSeleccionado === i ? null : i)}
          style={{
            background: diaSeleccionado === i ? '#c2185b' : '#f5f5f5',
            color: diaSeleccionado === i ? 'white' : '#333',
            padding: '6px 12px',
            fontSize: '0.85rem'
          }}
        >
          {d}
        </button>
      ))}
      <button
        onClick={() => setDiaSeleccionado(null)}
        style={{ background: diaSeleccionado === null ? '#7b1fa2' : '#f5f5f5', color: diaSeleccionado === null ? 'white' : '#333', padding: '6px 12px', fontSize: '0.85rem' }}
      >
        Semana completa
      </button>
    </div>

    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', tableLayout: 'fixed' }}>
        <thead>
          <tr style={{ background: '#c2185b', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left', minWidth: '250px' }}>Procedimiento</th>
            {diaSeleccionado === null
              ? dias.map(d => <th key={d} style={{ padding: '10px', textAlign: 'center', minWidth: '50px' }}>{d}</th>)
              : <th style={{ padding: '10px', textAlign: 'center' }}>{dias[diaSeleccionado]}</th>
            }
            <th style={{ padding: '10px', textAlign: 'center' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {procedimientos.map((proc, idx) => (
            <tr key={proc} style={{ background: idx % 2 === 0 ? '#fff' : '#fce4ec' }}>
              <td style={{ padding: '8px 10px', borderBottom: '1px solid #e0e0e0' }}>{proc}</td>
              {diaSeleccionado === null
                ? dias.map((_, i) => (
                    <td key={i} style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>
                      <input type="checkbox" checked={!!registro[`${proc}-${i}`]} onChange={() => toggle(proc, i)} style={{ cursor: 'pointer', width: '18px', height: '18px' }} />
                    </td>
                  ))
                : <td style={{ textAlign: 'center', borderBottom: '1px solid #e0e0e0' }}>
                    <input type="checkbox" checked={!!registro[`${proc}-${diaSeleccionado}`]} onChange={() => toggle(proc, diaSeleccionado)} style={{ cursor: 'pointer', width: '18px', height: '18px' }} />
                  </td>
              }
              <td style={{ textAlign: 'center', fontWeight: 'bold', color: '#c2185b', borderBottom: '1px solid #e0e0e0' }}>
                {getTotal(proc)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
}

export default RegistroARO