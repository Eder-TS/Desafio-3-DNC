import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import styles from './NavBar.module.css'

export default function NavBar(){

    const [display, setDisplay] = useState('none');
    function DisplaySection(){
        setDisplay(document.getElementById("technologies").style.display = 'block')        
    }

    return(
        <nav className={styles.navbar}>
            <ul className={styles.internalLinks}>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#technologies" onClick={DisplaySection}>Tecnologias</a></li>
                <li><a href="#aboutMe">Sobre mim</a></li>
            </ul>

            <ul className={styles.externalLinks}>
                <li>
                    <a href="https://github.com/Eder-TS">
                        <FaGithub size={30}/>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/eder-ts/">
                        <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
        </nav>
        
    )
}