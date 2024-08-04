import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtnScroll(true);
      } else {
        setShowBtnScroll(false);
      }
    })
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  const [showBtnScroll, setShowBtnScroll] = useState(false);
  return (
    <div className='container' id='up'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
      <a href="#up" style={{ opacity: showBtnScroll? 1 : 0, transition: "3s" }}>
        <button className='icon-keyboard_arrow_up scrollTop'></button>
      </a>

    </div>
  )
}

export default App
