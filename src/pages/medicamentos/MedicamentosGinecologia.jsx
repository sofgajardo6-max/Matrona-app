import { useState } from 'react'

const data = [
  {
    afeccion: 'Sífilis',
    filas: [
      { situacion: 'Primera línea', medicamento: 'Penicilina benzatina', dosis: '2.4M UI', via: 'IM', frecuencia: '2 veces en 2 semanas' },
      { situacion: 'Alérgica PNC', medicamento: 'Tetraciclina', dosis: '500mg', via: 'Oral', frecuencia: 'c/6hrs x 15 días' },
      { situacion: 'Alérgica PNC', medicamento: 'Doxiciclina', dosis: '100mg', via: 'Oral', frecuencia: 'c/12hrs x 15 días' },
      { situacion: 'Gestante alérgica PNC', medicamento: 'Eritromicina', dosis: '500mg', via: 'Oral', frecuencia: 'c/6hrs x 30 días' },
      { situacion: 'Congénita', medicamento: 'PNC sódica', dosis: '-', via: 'EV', frecuencia: 'x 10-14 días' },
    ]
  },
  {
    afeccion: 'Herpes Genital',
    filas: [
      { situacion: 'Primo infección', medicamento: 'Aciclovir', dosis: '400mg', via: 'Oral', frecuencia: 'c/8hrs x 7-10 días' },
      { situacion: 'Primo infección', medicamento: 'Valaciclovir', dosis: '1g', via: 'Oral', frecuencia: 'c/12hrs x 7 días' },
      { situacion: 'Neonatal', medicamento: 'Aciclovir', dosis: '20mg/kg', via: 'EV', frecuencia: 'c/8hrs x 14 días' },
      { situacion: 'Gestante recurrente desde 36sem', medicamento: 'Aciclovir', dosis: '400mg', via: 'Oral', frecuencia: 'c/12hrs continuo' },
    ]
  },
  {
    afeccion: 'Condiloma Acuminado (VPH)',
    filas: [
      { situacion: 'Autoadministrado', medicamento: 'Podofilotoxina', dosis: '0.5%', via: 'Tópico', frecuencia: '2x día x 3 días' },
      { situacion: 'Autoadministrado', medicamento: 'Imiquimod', dosis: '5% crema', via: 'Tópico', frecuencia: 'Días alternos hasta 16 semanas, dejar 6-10hrs y lavar' },
      { situacion: 'Profesional', medicamento: 'Ácido tricloroacético', dosis: '80-90%', via: 'Tópico', frecuencia: 'Semanal' },
      { situacion: 'Profesional', medicamento: 'Podofilino', dosis: '10-30%', via: 'Tópico', frecuencia: 'Semanal' },
      { situacion: 'Profesional gestante', medicamento: 'Ácido tricloroacético', dosis: '80-90%', via: 'Tópico', frecuencia: 'Semanal' },
    ]
  },
  {
    afeccion: 'Gonorrea',
    filas: [
      { situacion: 'Primera línea', medicamento: 'Ceftriaxona', dosis: '250mg', via: 'IM', frecuencia: 'Dosis única' },
      { situacion: 'Alternativa', medicamento: 'Cefixima', dosis: '400mg', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Alternativa', medicamento: 'Cefpodoximo', dosis: '400mg', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Alternativa', medicamento: 'Azitromicina', dosis: '2g', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Gestante', medicamento: 'Ceftriaxona', dosis: '250mg', via: 'IM', frecuencia: 'Dosis única' },
      { situacion: 'Gestante', medicamento: 'Azitromicina', dosis: '2g', via: 'Oral', frecuencia: 'Dosis única' },
    ]
  },
  {
    afeccion: 'Clamidia / Uretritis / Cervicitis no Gonocócica',
    filas: [
      { situacion: 'No embarazada', medicamento: 'Azitromicina', dosis: '1g', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'No embarazada', medicamento: 'Doxiciclina', dosis: '100mg', via: 'Oral', frecuencia: 'c/12hrs x 7 días' },
      { situacion: 'Embarazada', medicamento: 'Azitromicina', dosis: '1g', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Embarazada', medicamento: 'Eritromicina', dosis: '500mg', via: 'Oral', frecuencia: 'c/6hrs x 7 días' },
    ]
  },
  {
    afeccion: 'Tricomoniasis',
    nota: '⚠️ NO usar metronidazol en 1er trimestre. NO alcohol 12-24hrs post toma.',
    filas: [
      { situacion: 'Primera línea', medicamento: 'Metronidazol', dosis: '2g', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Primera línea', medicamento: 'Metronidazol', dosis: '500mg', via: 'Óvulo vaginal', frecuencia: 'Cada noche x 7 días' },
      { situacion: '2da elección', medicamento: 'Tinidazol', dosis: '2g', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Falla tratamiento', medicamento: 'Metronidazol', dosis: '2g', via: 'Oral', frecuencia: 'Cada día x 3 días alternos' },
    ]
  },
  {
    afeccion: 'Candidiasis Genital No Complicada',
    filas: [
      { situacion: '-', medicamento: 'Fluconazol', dosis: '150mg', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: '-', medicamento: 'Itraconazol', dosis: '200mg', via: 'Oral', frecuencia: 'c/12hrs, 1 vez' },
      { situacion: '-', medicamento: 'Clotrimazol', dosis: '500mg', via: 'Óvulo', frecuencia: 'Dosis única' },
      { situacion: '-', medicamento: 'Clotrimazol', dosis: '100mg', via: 'Óvulo', frecuencia: 'Diaria x 7 días' },
      { situacion: '-', medicamento: 'Nistatina', dosis: '100.000 UI', via: 'Óvulo', frecuencia: 'Cada noche x 10 días' },
      { situacion: '-', medicamento: 'Clotrimazol', dosis: '1% crema', via: 'Tópico', frecuencia: '2x día x 10 días' },
      { situacion: '-', medicamento: 'Bifonazol', dosis: '1% crema', via: 'Tópico', frecuencia: '2x día x 10 días' },
    ]
  },
  {
    afeccion: 'Candidiasis Genital Recurrente — Fase inicial',
    filas: [
      { situacion: '-', medicamento: 'Clotrimazol o Nistatina', dosis: '100mg', via: 'Óvulo', frecuencia: 'Diario x 10 días' },
      { situacion: '-', medicamento: 'Fluconazol', dosis: '150mg', via: 'Oral', frecuencia: 'Diario x 3 días' },
    ]
  },
  {
    afeccion: 'Candidiasis Genital Recurrente — Mantención',
    filas: [
      { situacion: '-', medicamento: 'Clotrimazol', dosis: '500mg', via: 'Óvulo', frecuencia: '1x semana x 6 meses' },
      { situacion: '-', medicamento: 'Fluconazol', dosis: '150mg', via: 'Oral', frecuencia: '1x semana x 6 meses' },
      { situacion: '-', medicamento: 'Itraconazol', dosis: '200mg', via: 'Oral', frecuencia: 'c/12hrs, 1 día al mes x 6 meses' },
    ]
  },
  {
    afeccion: 'Vaginosis Bacteriana',
    filas: [
      { situacion: 'Primera línea', medicamento: 'Metronidazol', dosis: '500mg', via: 'Oral', frecuencia: '2x día x 7 días' },
      { situacion: 'Primera línea', medicamento: 'Metronidazol gel', dosis: '0.75% (5g)', via: 'Intravaginal', frecuencia: '1x día x 5 días' },
      { situacion: 'Primera línea', medicamento: 'Clindamicina crema', dosis: '2% (5g)', via: 'Intravaginal', frecuencia: '1x día x 7 días' },
      { situacion: 'Alternativa', medicamento: 'Metronidazol', dosis: '2g', via: 'Oral', frecuencia: 'Dosis única' },
      { situacion: 'Alternativa', medicamento: 'Clindamicina', dosis: '300mg', via: 'Oral', frecuencia: '2x día x 7 días' },
      { situacion: 'Alternativa', medicamento: 'Cloruro de decualinio', dosis: '10mg', via: 'Vaginal comp', frecuencia: 'c/24hrs x 6 días' },
    ]
  },
  {
    afeccion: 'Pediculosis Púbica',
    filas: [
      { situacion: '-', medicamento: 'Permetrina', dosis: '1% crema', via: 'Tópico', frecuencia: 'x 7 días' },
    ]
  },
]

const estiloTabla = { width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '2rem' }
const estiloTh = { background: '#7b1fa2', color: 'white', padding: '8px 10px', textAlign: 'left' }
const estiloTd = { padding: '8px 10px', borderBottom: '1px solid #e0e0e0' }

function MedicamentosGinecologia() {
  const [busqueda, setBusqueda] = useState('')

  function sinTildes(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

const filtrados = data.filter(item =>
  sinTildes(item.afeccion).includes(sinTildes(busqueda))
)

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>🌸 Ginecología — ITS</h2>

      <input
        type="text"
        placeholder="Buscar afección... ej: sífilis"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        style={{ width: '100%', marginBottom: '1.5rem', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
      />

      {filtrados.length === 0 && (
        <p style={{ color: '#888' }}>No se encontró ninguna afección.</p>
      )}

      {filtrados.map(item => (
        <div key={item.afeccion}>
          <h3 style={{ color: '#7b1fa2', marginBottom: '0.5rem' }}>{item.afeccion}</h3>
          {item.nota && (
            <p style={{ background: '#fff3e0', padding: '8px 12px', borderRadius: '8px', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
              {item.nota}
            </p>
          )}
          <div style={{ overflowX: 'auto' }}>
            <table style={estiloTabla}>
              <thead>
                <tr>
                  <th style={estiloTh}>Situación</th>
                  <th style={estiloTh}>Medicamento</th>
                  <th style={estiloTh}>Dosis</th>
                  <th style={estiloTh}>Vía</th>
                  <th style={estiloTh}>Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                {item.filas.map((fila, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f3e5f5' }}>
                    <td style={estiloTd}>{fila.situacion}</td>
                    <td style={estiloTd}><strong>{fila.medicamento}</strong></td>
                    <td style={estiloTd}>{fila.dosis}</td>
                    <td style={estiloTd}>{fila.via}</td>
                    <td style={estiloTd}>{fila.frecuencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MedicamentosGinecologia