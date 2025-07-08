import styles from './Technology.module.css'
import { useState } from 'react'

export default function Technology({icon: Icon, description}){
    const [actualSize, setActualSize] = useState(200)

    return(
        <>
            <div 
                className={styles.block} 
                onMouseOver={() => setActualSize(80)} 
                onMouseLeave={() => setActualSize(200)}
            >

                <Icon size={actualSize}/>

                <span className={styles.description}>
                    {description}
                </span>
            </div>
        </>
    )
}