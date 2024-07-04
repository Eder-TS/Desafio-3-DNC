import { FaGithub } from "react-icons/fa"
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.navbar}>
            <a href="http://">
                <FaGithub size={100}/>
            </a>
            
        </div>
        
    )
}

export default NavBar