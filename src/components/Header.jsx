import './Header.css'
import Foto from '../assets/ElBalmaceda.webp'
function Header(){
    return(
        <div className="HeaderPagina">
            <ul className='Division-Contenidos'>
                <li className="Contenido-Foto">
                    <img className="FotoDev"src={Foto} alt="" />
                </li>
                <li className="Contenido-Datos">
                    <h2 className='Dato-Saludo'>Hola, soy </h2>
                    <h1 className='Dato-Nombre'>Ignacio Cabrera-Balmaceda</h1> 
                    <h3 className='Dato-Carrera'>Tecnico Universitario en Informatica</h3>               
                    <h4 className='Dato-Especializacion'>BackEnd Developer Junior</h4>
                    <input className="Btn-Experiencia" type="button" value="Experiencia" />
                    <input className="Btn-Contacto" type="button" value="Contacto" />
                    
                   
                </li>
                
            </ul>
        </div>
    )
}
export default Header