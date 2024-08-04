import React, { useState ,useEffect }from 'react'
import "./Header.css"
import { HashLink } from 'react-router-hash-link';
export default function Header() {
  const [showModal,setshowModal] = useState(false);
  const [theme,setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
useEffect(() => {
if(theme ==="light"){
  document.body.classList.remove("dark");
  document.body.classList.add("light");
}else{
  document.body.classList.remove("light");
  document.body.classList.add("dark");
}
}, [theme])

  return (
    <header className='flex'>
      <button className='menu icon-menu flex' onClick={() =>{
        setshowModal(true)
      }}/>
      <div />
      <nav>
        <ul className='flex'>
          <li>
            <HashLink smooth to="/#about">About</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects"> Projects</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">Contact</HashLink>
          </li>
        </ul>
      </nav>
      <button className='mode flex' onClick={()=>{
        localStorage.setItem("currentMode" ,theme==="dark" ? "light" : "dark" );
        setTheme(localStorage.getItem("currentMode"));
      }}>
        {theme==="dark"? ( <span className='icon-moon-o'></span>) : ( <span className='icon-sun'></span>)}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className='modal'>
          <li><button className='icon-close1' onClick={()=>{
            setshowModal(false)
          }}/></li>
            <li><a href="">About</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Speaking</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}
