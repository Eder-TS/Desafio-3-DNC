import styles from './Card.module.css'

function Card({site, src, alt, title, description, repo}){
    return(
        <article className={styles.card}>
            <a href={site}>
                <img src={src} alt={alt} width={500} height={266}/>
            </a>

            <h3>{title}</h3>

            <p>{description}</p>

            <button> <a href={repo}>Repositório do projeto</a></button>
        </article>
    )
}

export default Card