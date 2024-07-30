import { BiLogoHtml5, BiLogoCss3,BiLogoJava, BiLogoReact } from "react-icons/bi";
import { RxFigmaLogo } from "react-icons/rx"
import Technology from "../elements/Technology";
import styles from './Technologies.module.css'

export default function Technologies(){
    return(
        <section className={styles.technologies} id="technologies" style={{display:'none'}}>
            <h1>Tecnologias que domino</h1>

            <div className={styles.flex}>
                <Technology
                     icon={<RxFigmaLogo size={200}/>} 
                     description={'Ferramenta para design de interfaces digitais.'}
                />

                <Technology 
                    icon={<BiLogoHtml5 size={200}/>} 
                    description={'Linguagem de marcação utilizada na construção de páginas web. É a linguagem interpretada pelos navegadores.'}
                />

                <Technology 
                    icon={<BiLogoCss3 size={200}/>} 
                    description={'Linguagem de estilo que possibilita dar vida e personalização às páginas web.'}
                />

                <Technology 
                    icon={<BiLogoReact size={200}/>} 
                    description={'Biblioteca Javascript para front-end voltada para criação de interfaces dinâmicas para a web.'}
                />

                <Technology 
                    icon={<BiLogoJava size={200}/>} 
                    description={'Linguagem de programação para back-end. É robusta e é utlizada em milhares de aplicativos.'}
                />
            </div>
        </section>
    )
}