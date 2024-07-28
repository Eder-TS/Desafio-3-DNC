import { BiLogoHtml5, BiLogoCss3,BiLogoJava, BiLogoReact } from "react-icons/bi";
import { RxFigmaLogo } from "react-icons/rx";
import styles from './Technologies.module.css'
import { useEffect, useState } from "react";

export default function Technologies(){
    const [style, setStyle] = useState({display:'none'})
    
    function displayBlock(){
        setStyle({display:'block'})
    }

    function displayNone(){
        setStyle({display:'none'})
    }

    return(
        <section className={styles.technologies} id="technologies" style={{display:'none'}}>
            <h1>Tecnologias que domino</h1>

            <div className={styles.flex}>
                <div className={styles.block} onMouseEnter={displayBlock} onMouseLeave={displayNone}>

                    <RxFigmaLogo size={200}/>

                    <span className={styles.description} id="figma" style={style}>
                        Ferramenta para design de interfaces digitais.
                    </span>
                </div>

                <div className={styles.block} onMouseEnter={displayBlock} onMouseLeave={displayNone}>

                    <BiLogoHtml5 size={200}/>

                    <span className={styles.description} style={style}>
                        Linguagem de marcação utilizada na construção de páginas web. 
                        É a linguagem interpretada pelos navegadores.
                    </span>
                </div>

                <div className={styles.block} onMouseEnter={displayBlock} onMouseLeave={displayNone}>

                    <BiLogoCss3 size={200}/>

                    <span className={styles.description} style={style}>
                        Linguagem de estilo que possibilita dar vida e personalização às páginas web.
                    </span>
                </div>

                <div className={styles.block} onMouseEnter={displayBlock} onMouseLeave={displayNone}>

                    <BiLogoReact size={200}/>

                    <span className={styles.description} style={style}>
                        Biblioteca Javascript para front-end voltada para criação de interfaces dinâmicas
                        para a web. 
                    </span>
                </div>

                <div className={styles.block} onMouseEnter={displayBlock} onMouseLeave={displayNone}>

                    <BiLogoJava size={200}/>

                    <span className={styles.description} style={style}>
                        Linguagem de programação para back-end. É robusta e é utlizada em milhares de aplicativos.
                    </span>
                </div>
            </div>
        </section>
    )
}