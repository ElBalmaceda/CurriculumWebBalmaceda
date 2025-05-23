import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Componentes llamados
import Header from './components/Header'
import NavBar from './components/NavBar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Header/>
    </header>
    <nav>
      <NavBar/>
    </nav>
    <main>
      <article id='SobreMi'></article>
      <article id='Experencia'></article>
      <article id='Proyectos'></article>
      <article id='Contacto'></article>
    </main>
    <footer>

    </footer>

  </StrictMode>
)
