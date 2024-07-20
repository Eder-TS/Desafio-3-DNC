import { BiLogoHtml5, BiLogoCss3,BiLogoJava, BiLogoReact } from "react-icons/bi";
import { RxFigmaLogo } from "react-icons/rx";
import styles from './Technologies.module.css'

export default function Technologies(){    
    return(
        <section className={styles.technologies} id="technologies" style={{display: 'none'}}>
            <h1>Tecnologias que domino</h1>

            <div>
                <RxFigmaLogo size={200}/>
                <BiLogoHtml5 size={200}/>
                <BiLogoCss3 size={200}/>
                <BiLogoReact size={200}/>
                <BiLogoJava size={200}/>
            </div>
        </section>
    )
}