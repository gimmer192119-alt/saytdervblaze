import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              GRAPHITE<span className="logo-accent">&</span>LIME
            </a>
            <p className="footer-tagline">
              Создаём цифровое будущее вместе с вами
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#contact">Контакты</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Контакты</h4>
              <ul>
                <li><a href="mailto:info@graphitelime.ru">info@graphitelime.ru</a></li>
                <li><a href="tel:+79991234567">+7 (999) 123-45-67</a></li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Graphite & Lime. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
