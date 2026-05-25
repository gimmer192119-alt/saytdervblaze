import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="https://hb.ru-msk.vkcloud-storage.ru/media.sovetnik.ai/videos/2092b8e3-79a3-4e83-9584-471c5adca8e7.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7voFRz62qQqdzK6ijxTgjR%2F20260525%2Fru-msk%2Fs3%2Faws4_request&X-Amz-Date=20260525T043633Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=7aa0b82c3be18f8b49a17025435ae27a52d761ecd84ac6dd8b6e6953e91b89a9" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Создаём <span className="highlight">будущее</span> уже сегодня
          </h1>
          <p className="hero-subtitle">
            Инновационные решения для вашего бизнеса в цифровую эпоху
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Начать проект</a>
            <a href="#about" className="btn btn-outline">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
