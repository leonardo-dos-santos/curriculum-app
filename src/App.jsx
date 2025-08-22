import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo.jsx'
import EducationExperience from './components/EducationExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'
import './styles/app.css'
import SectionCard from './components/SectionCard.jsx'

export default function App() {
  // ✅ Estados por seção
  const [general, setGeneral] = useState({ name: '', email: '', phone: '' })
  const [education, setEducation] = useState({ school: '', title: '', date: '' })
  const [practical, setPractical] = useState({ company: '', position: '', responsibilities: '', from: '', until: '' })

  // ✅ Controle de edição
  const [edit, setEdit] = useState({ general: true, education: true, practical: true })

  // ✅ Handlers
  const handleChange = (section) => (field, value) => {
    if (section === 'general') setGeneral((prev) => ({ ...prev, [field]: value }))
    if (section === 'education') setEducation((prev) => ({ ...prev, [field]: value }))
    if (section === 'practical') setPractical((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (section) => (e) => {
    e.preventDefault()
    setEdit((prev) => ({ ...prev, [section]: false }))
  }

  const handleEdit = (section) => () => {
    setEdit((prev) => ({ ...prev, [section]: true }))
  }

  const resetAll = () => {
    setGeneral({ name: '', email: '', phone: '' })
    setEducation({ school: '', title: '', date: '' })
    setPractical({ company: '', position: '', responsibilities: '', from: '', until: '' })
    setEdit({ general: true, education: true, practical: true })
  }

  // ✅ JSX
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Curriculum App</h1>
        <p className="subtitle">Preencha, envie e edite suas informações por seção.</p>
        <button className="reset-btn" onClick={resetAll}>Resetar tudo</button>
      </header>

      <main className="grid">
        <GeneralInfo
          value={general}
          onChange={handleChange('general')}
          editMode={edit.general}
          onSubmit={handleSubmit('general')}
          onEdit={handleEdit('general')}
        />

        <EducationExperience
          value={education}
          onChange={handleChange('education')}
          editMode={edit.education}
          onSubmit={handleSubmit('education')}
          onEdit={handleEdit('education')}
        />

        <PracticalExperience
          value={practical}
          onChange={handleChange('practical')}
          editMode={edit.practical}
          onSubmit={handleSubmit('practical')}
          onEdit={handleEdit('practical')}
        />
      </main>

      <footer className="app-footer">
        <small>Feito com React + Vite • Estado levantado em App.jsx e passado por props</small>
      </footer>
    </div>
  )
}