import SectionCard from './SectionCard.jsx'
import '../styles/forms.css'

export default function PracticalExperience({ value, onChange, editMode, onSubmit, onEdit }) {
  const handleChange = (e) => onChange(e.target.name, e.target.value)

  return (
    <SectionCard title="Experiência Prática" subtitle="Empresa, cargo, responsabilidades e período">
      {editMode ? (
        <form onSubmit={onSubmit} className="form">
          <div className="form-row">
            <label htmlFor="company">Empresa</label>
            <input
              id="company"
              name="company"
              value={value.company}
              onChange={handleChange}
              placeholder="Ex: ACME S.A."
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="position">Cargo</label>
            <input
              id="position"
              name="position"
              value={value.position}
              onChange={handleChange}
              placeholder="Ex: Desenvolvedor Frontend"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="responsibilities">Responsabilidades principais</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={value.responsibilities}
              onChange={handleChange}
              placeholder="Ex: Desenvolver componentes React, integrar APIs, escrever testes"
              rows="4"
            />
          </div>

          <div className="form-row two-cols">
            <div>
              <label htmlFor="from">De</label>
              <input
                id="from"
                name="from"
                value={value.from}
                onChange={handleChange}
                placeholder="Ex: Jan/2023"
              />
            </div>
            <div>
              <label htmlFor="until">Até</label>
              <input
                id="until"
                name="until"
                value={value.until}
                onChange={handleChange}
                placeholder="Ex: Ago/2024 ou Atual"
              />
            </div>
          </div>

          <div className="buttons">
            <button type="submit" className="btn primary">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p><strong>Empresa:</strong> {value.company || '—'}</p>
          <p><strong>Cargo:</strong> {value.position || '—'}</p>
          <p><strong>Responsabilidades:</strong> {value.responsibilities || '—'}</p>
          <p><strong>Período:</strong> {value.from || '—'} {value.until ? `— ${value.until}` : ''}</p>
          <div className="buttons">
            <button type="button" className="btn" onClick={onEdit}>Edit</button>
          </div>
        </div>
      )}
    </SectionCard>
  )
}
