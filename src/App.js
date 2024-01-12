import './App.css'
import waste2 from './images/waste2.svg'
import recycle from './images/recycle.svg'


function App() {
  return <>
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <nav className='header-nav'>
              <img className='logo' src={waste2}></img>
              <ul className='menu'>
                <li className='menu-item'>
                  <a className='menu-link'>About us</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Services</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Projects</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Reviews</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Contacts</a>
                </li>
              </ul>
            
          </nav>
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          <h1 className='title'> waste and recycling</h1>
          <p className='title-notes'>Веб-сайти, мобільні застосунки, UX / UI дизайн, логотипи та брендінг, SMM.</p>
          <a className='title-img'href=''></a>
        </div>
      </main>
      <footer className='footer'>
        <div className='container'>
          <div className='about'>
            <h2 className='about-title'>About Us:</h2>
            <p>Наша IT-агенція - це команда професіоналів, які працюють в галузі веб-розробки, брендування, дизайну та маркетингу.
              Ми маємо досвід роботи з різними компаніями та бізнесами, надаючи їм інноваційні технології та креативні рішення для досягнення їх цілей. Наша мета
              - створення унікального та привабливого веб-продукту для наших клієнтів, який буде відображати їхні бренди та перевершувати їх очікування.
            </p>
          </div>
          <div className='services'>
            <h2 className='services-title'>Our Services:</h2>
            <ul className='services-list'>
              <li className='service-item'>
                <h3 className='service-name'>Logo</h3>
                <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                <a className='service-more' href=''>Read more</a>
              </li>

              <li className='service-item'>
                <h3 className='service-name'>Моушн-графіка</h3>
                <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                <a className='service-more' href=''>Read more</a>
              </li>

              <li className='service-item'>
                <h3 className='service-name'>Розробка</h3>
                <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                <a className='service-more' href=''>Read more</a>
              </li>

              <li className='service-item'>
                <h3 className='service-name'>Онлайн-маркетинг</h3>
                <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                <a className='service-more' href=''>Read more</a>
              </li>

              <li className='service-item'>
                <h3 className='service-name'>Брендування</h3>
                <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                <a className='service-more' href=''>Read more</a>
              </li>

              <li className='service-item'>
                <h3 className='service-name'>Стартапи</h3>
                <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                <a className='service-more' href=''>Read more</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>

  </>
}

export default App;
