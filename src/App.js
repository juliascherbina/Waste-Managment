import './App.css'
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import agency from './images/agency.jpg'
import photo from './images/woman.png'
import right from './images/icon-right.svg'
import left from './images/icon-left.svg'

function App() {
  return <>
    <div className='wrapper'>
      <Header />
      <Main />

      <section className='projects'>
        <div className='container'>
          <h1 className='projects-header'>Our Projects</h1>
          <div className='projects-list'>
            <ul className='projects-items'>
              <li className='projects-item'>
                <a href=''>All works</a>
              </li>
              <li className='projects-item'>
                <a href=''>Our Brends</a>
              </li>
              <li className='projects-item'>
                <a href=''>Our Apps</a>
              </li>
            </ul>
          </div>
          <div className='works-list'>
            <ul className='work-list-items'>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Креативне агентство</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Соціальна мережа</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Планувальник справ</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Digital-агентство</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Цифровий маркетинг</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Онлайн-бухгалтерія</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
            </ul>
          </div>
          <button className='work-btn'> Show more...</button>
        </div>
      </section>
      <section className='feedback'>
        <div className='container'>
          <h1 className='feedback-header'>customer feedback</h1>
          <div className='feedback-items'>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>
            </div>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>            </div>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>            </div>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>            </div>
            <button className='left-arrow'><img src={left}></img></button>
            <button className='right-arrow'><img src={right}></img></button>
            <button className='point-btn'></button>
          </div>
        </div>
      </section>
      <section className='connect'>
        <h1 className='connect-header'> Connect with us</h1>
        <form className='connect-form'>
          <label for='fname'>First name:</label>
          <input type='text' id='fname' name='fname' value='enter your name'></input>

          <label for='lname'>Last name:</label>
          <input type='text' id='lname' name='lname' value='enter your last name'></input>

          <label for='email'>Email</label>
          <input type='text' id='email' name='email' value='enter your email' ></input>
          <button>Want to connect</button>
        </form>
      </section>
    </div>
    <Footer />

  </>
}

export default App;
