import styles from './Button.module.css'
export default function Button({href, text}){
    return(
        <div className={styles.button}>
            <a href={href}>
                <button>{text}</button>
            </a>
        </div>
    )
}