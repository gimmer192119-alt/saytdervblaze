import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            GRAPHITE<span className="logo-accent">&</span>LIME
          </a>
          
          <ul className="nav-menu">
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
          
          <button className="nav-toggle" aria-label="toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
