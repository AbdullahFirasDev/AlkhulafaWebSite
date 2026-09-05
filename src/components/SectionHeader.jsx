export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-heading ${align === 'left' ? 'left' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
