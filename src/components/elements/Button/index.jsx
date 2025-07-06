import styles from './Button.module.css'
export default function Button({href, text}){
    return(
        <div className={
                href !== '' ? styles.button : styles.disabled
            }>
            <a href={href}>
                <button
                    disabled={href === ''}
                >{
                    href === '' ? "Repositório privado" : text
                }</button>
            </a>
        </div>
    )
}