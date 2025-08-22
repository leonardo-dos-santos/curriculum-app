import '../styles/section.css'

export default function SectionCard({ title, subtitle, children, actions }) {
  return (
    <section className="section-card">
      <header className="section-header">
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </header>
      <div className="section-content">{children}</div>
      {actions && <div className="section-actions">{actions}</div>}
    </section>
  )
}