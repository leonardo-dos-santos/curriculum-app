import SectionCard from './SectionCard.jsx'
import '../styles/forms.css'

export default function EducationExperience({ value, onChange, editMode, onSubmit, onEdit }) {
  const handleChange = (e) => onChange(e.target.name, e.target.value)

  return (
    <SectionCard title="Experiência Educacional" subtitle="Escola, título e data de estudo">
      {editMode ? (
        <form onSubmit={onSubmit} className="form">
          <div className="form-row">
            <label htmlFor="school">Nome da escola</label>
            <input id="school" name="school" value={value.school} onChange={handleChange} placeholder="Ex: USP" required />
          </div>
          <div className="form-row">
            <label htmlFor="title">Título de estudo</label>
            <input id="title" name="title" value={value.title} onChange={handleChange} placeholder="Ex: Bacharelado em Ciências da Computação" required />
          </div>
          <div className="form-row">
            <label htmlFor="date">Data de estudo</label>
            <input id="date" name="date" value={value.date} onChange={handleChange} placeholder="Ex: 2019 - 2023" />
          </div>
          <div className="buttons">
            <button type="submit" className="btn primary">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p><strong>Escola:</strong> {value.school || '—'}</p>
          <p><strong>Título:</strong> {value.title || '—'}</p>
          <p><strong>Data:</strong> {value.date || '—'}</p>
          <div className="buttons">
            <button type="button" className="btn" onClick={onEdit}>Edit</button>
          </div>
        </div>
      )}
    </SectionCard>
  )
}