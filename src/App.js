import './App.css'
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';

import { Projects } from './Components/Main/Projects';
import { Feedback } from './Components/Feedback/Feedback';
import { Connect } from './Components/Connect/Connect';

function App() {
  return <>
    <div className='wrapper'>
      <Header />
      <Main />
      <Feedback />
      <Connect />
      <Footer />
    </div>


  </>
}

export default App;
