import timeline from '/aboutme/timeline.svg'
import styles from './AboutMe.module.css'

export default function AboutMe(){
    return(
        <section className={styles.aboutme} id='aboutMe'>
            <h1>Sobre mim</h1>

            <div className={styles.timelinewraper}>
                <div className={styles.linearea}><img src={timeline} alt="Linha do tempo" /></div>

                <div className={styles.event}>
                    <div className={styles.date}>
                        <h2>2022</h2>
                    </div>
                    
                    <div className={styles.boxcontent}>
                        <p>
                            Iniciei meus estudos
                            com Java. Estava procurando 
                            entender melhor backend.
                        </p>
                    </div>
                    
                </div>

                <div className={styles.event}>
                    <div className={styles.date}>
                        <h2>2023</h2>
                    </div>
                    
                    <div className={styles.boxcontent}>
                        <p>
                            No primeiro semestre
                            desenvolvi alguns projetos
                            pessoais para exercitar.
                        </p>
                    </div>
                    
                </div>

                <div className={styles.event}>
                    <div className={styles.date}>
                        <h2>2023</h2>
                    </div>
                    
                    <div className={styles.boxcontent}>
                        <p>
                            No segundo semestre iniciei 
                            o curso Full Stack Javascript 
                            para uma compreenção mais 
                            completa das aplicações.
                        </p>
                    </div>
                    
                </div>

                <div className={styles.event}>
                    <div className={styles.date}>
                        <h2>2024</h2>
                    </div>

                    <div className={styles.boxcontent}>
                        <p>
                            Finalizado os estudos 
                            em frontend e iniciado em backend.
                        </p>
                    </div>
                    
                </div>

                <div className={styles.event}>
                    <div className={styles.date}>
                        <h2>2025</h2>
                    </div>

                    <div className={styles.boxcontent}>
                        <p>
                            Estudos em Typescript e DevOps.
                        </p>
                    </div>
                    
                </div>

                <div className={styles.event}>
                    <div className={styles.date}>
                        <h2>2026</h2>
                    </div>

                    <div className={styles.boxcontent}>
                        <p>
                            Finalizado o curso e iniciada a criação de ferramentas e aplicações.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}