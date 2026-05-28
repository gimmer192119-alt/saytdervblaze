import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Скорость',
      description: 'Молниеносная производительность и оптимизация всех процессов'
    },
    {
      icon: '🛡️',
      title: 'Надёжность',
      description: 'Гарантия стабильной работы и безопасности ваших данных'
    },
    {
      icon: '🎨',
      title: 'Дизайн',
      description: 'Современный и уникальный визуальный стиль для вашего бренда'
    },
    {
      icon: '🚀',
      title: 'Инновации',
      description: 'Передовые технологии и решения для роста вашего бизнеса'
    }
  ]

  return (
    <section id="about" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Почему <span className="highlight">мы</span></h2>
          <p className="section-subtitle">
            Преимущества, которые выделяют нас среди конкурентов
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
