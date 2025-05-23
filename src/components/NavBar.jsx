import './NavBar.css'


function NavBar(){

    return(
        <div className="NavBarLateral">
            <ul className="Division-Secciones">
                <li className="Seccion-SobreMi">
                    <a href="#SobreMi"><h3>Sobre Mi</h3></a>
                </li>
                <li className="Seccion-Experiencia">
                    <a href="#Experencia"><h3>Experiencia</h3></a>
                </li>
                <li className="Seccion-Proyectos">
                    <a href="#Proyectos"><h3>Proyectos</h3></a>
                </li>
                <li className="Seccion-Contacto">
                    <a href="#Contacto"><h3>Contacto</h3></a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar