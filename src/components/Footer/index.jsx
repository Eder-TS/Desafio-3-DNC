import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiFigma } from "react-icons/fi";
import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <div>
                    <p>Meu contato:</p>
                    <p>48-991180942</p>
                </div>

                <div>
                    <p>Email:</p>
                    <p>stederwork@gmail.com</p>
                </div>
            </div>

            <ul className={styles.externalLinks}>
                <li>
                    <a href="https://github.com/Eder-TS">
                        <FaGithub size={50}/>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/eder-ts/">
                        <FaLinkedin size={50}/>
                    </a>
                </li>

                <li>
                    <a href="https://www.figma.com/@ederts">
                        <FiFigma size={50}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}