import Button from '../elements/Button'
import styles from './Presentation.module.css'

export default function Presentation(){
    return(
        <section className={styles.presentation}>
            <h1>{/*Eder TS - Desenvolvedor Full Stack*/}Título</h1>

            <p className={styles.text}>
                Antenado as mais novas tecnologias para trazer as<br/>
                melhores soluções às suas demandas de sistemas, seja<br/>
                uma simples página de apresentação ou e-commerce completo.
            </p>

            <Button href="https://www.linkedin.com/in/eder-ts/details/certifications/" text="Meus certificados" />
        </section>
    )
}