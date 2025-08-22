import SectionCard from './SectionCard.jsx'
import '../styles/forms.css'

export default function GeneralInfo({ value, onChange, editMode, onSubmit, onEdit }) {
  const handleChange = (e) => onChange(e.target.name, e.target.value)

  return (
    <SectionCard title="Informações Gerais" subtitle="Nome, email e telefone">
      {editMode ? (
        <form onSubmit={onSubmit} className="form">
          <div className="form-row">
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" value={value.name} onChange={handleChange} placeholder="Seu nome" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={value.email} onChange={handleChange} placeholder="voce@exemplo.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Telefone</label>
            <input id="phone" name="phone" value={value.phone} onChange={handleChange} placeholder="(xx) xxxxx-xxxx" />
          </div>
          <div className="buttons">
            <button type="submit" className="btn primary">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p><strong>Nome:</strong> {value.name || '—'}</p>
          <p><strong>Email:</strong> {value.email || '—'}</p>
          <p><strong>Telefone:</strong> {value.phone || '—'}</p>
          <div className="buttons">
            <button type="button" className="btn" onClick={onEdit}>Edit</button>
          </div>
        </div>
      )}
    </SectionCard>
  )
}