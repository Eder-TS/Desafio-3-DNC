import styles from './Card.module.css'

function Card({site, src, alt, title, description, repo}){
    return(
        <article className={styles.card}>
            <a href={site}>
                <img src={src} alt={alt}/>
            </a>

            <h3 className={styles.title}>{title}</h3>

            <p className={styles.text}>{description}</p>

            <button className={styles.button}> <a href={repo}>Repositório do projeto</a></button>
        </article>
    )
}

export default Card