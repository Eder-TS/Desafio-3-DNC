import styles from './AboutMe.module.css'

export default function AboutMe(){
    return(
        <section className={styles.aboutme}>
            <h1>Sobre mim</h1>

            <div className={styles.timeline}>
                <div className={styles.linearea}></div>
                <h2 className={styles.item}>2021</h2>
                <h2 className={styles.item}>2022</h2>
                <h2 className={styles.item}>2023</h2>
                <h2 className={styles.item}>2024</h2>
            </div>
        </section>
    )
}