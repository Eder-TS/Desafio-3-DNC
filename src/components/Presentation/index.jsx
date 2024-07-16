import styles from './Presentation.module.css'

function Presentation(){
    return(
        <section className={styles.presentation}>
            <h1>Eder TS - Desenvolvedor Full Stack</h1>

            <p className={styles.text}>
                Antenado as mais novas tecnologias para trazer as<br/>
                melhores soluções às suas demandas de sistemas, seja<br/>
                uma simples página de apresentação ou e-commerce completo.
            </p>

            <button className={styles.button}>botão</button>
        </section>
    )
}

export default Presentation