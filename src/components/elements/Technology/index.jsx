import styles from './Technology.module.css'

export default function Technology({icon, description}){
    return(
        <>
            <div className={styles.block}>

                {icon}

                <span className={styles.description}>
                    {description}
                </span>
            </div>
        </>
    )
}