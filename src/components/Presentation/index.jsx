import { useState, useEffect } from 'react'
import Button from '../elements/Button'
import styles from './Presentation.module.css'

export default function Presentation(){
    const [text, setText] = useState('')
    const toRotate = ['Eder TS!', 'Desenvolvedor Full Stack!']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 170
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let clock = setInterval(() => {
            toType()
        }, delta)
        return() => {clearInterval(clock)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText =  toRotate[i]
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop + 1)
        }
    }
    return(
        <section className={styles.presentation}>
            <h1>{text}</h1>

            <p className={styles.text}>
                Atento as mais novas tecnologias para trazer as<br/>
                melhores soluções às suas demandas de sistemas, seja<br/>
                uma simples página de apresentação ou e-commerce completo.
            </p>

            <Button href="https://www.linkedin.com/in/eder-ts/details/certifications/" text="Meus certificados" />
        </section>
    )
}