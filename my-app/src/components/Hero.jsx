import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline preload="auto">
          <source src="/загруженное.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Создаём <span className="highlight">будущее</span> уже сегодня
          </h1>
          <p className="hero-subtitle">
            Инновационные решения для вашего бизнеса в цифровую эпоху. 
            Мы превращаем смелые идеи в работающие продукты
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Начать проект</a>
            <a href="#about" className="btn btn-outline">Узнать больше</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Листайте вниз</span>
      </div>
    </section>
  )
}

export default Hero
