import Button from '../Button'
import styles from './Card.module.css'

export default function Card({site, src, alt, title, description, repo}){
    return(
        <article className={styles.card}>
            <a href={site}>
                <img src={src} alt={alt}/>
            </a>

            <h3 className={styles.title}>{title}</h3>

            <p className={styles.text}>{description}</p>

            <Button href={repo} text="Repositório do projeto"/>
        </article>
    )
}