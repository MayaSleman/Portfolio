import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <p>copyright &copy;2024. All right reversed by MayaSleman </p>
    </footer>
  )
}
