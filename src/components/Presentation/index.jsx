import { useEffect, useState } from 'react'
import Button from '../elements/Button'
import styles from './Presentation.module.css'

export default function Presentation(){
    let title = 'Eder TS - Desenvolvedor Full Stack'
    const [index, setIndex] = useState(0)
    const [letter, setLetter] = useState(title.at(index))
    const [textBefore, setTextBefore] = useState(' ')
    const [textAfter, setTextAfter] = useState('der TS - Desenvolvedor Full Stack')
    const [nextStep, setNextStep] = useState(0)
    var span = window.document.createElement('span')

    useEffect(() => {
        let clock = setInterval(() => {
            if(index <= 32){
                setLetter(title.at(index))
                toMount(letter)
                toSlice(index)
                setIndex(index + 1)
            } else {
                setLetter(title.at(index))
                toMount(letter)
                toSlice(index)
                setIndex(0)
            }
        } , 400)
        return(() => clearInterval(clock))
    },[nextStep])

    function toMount(letter){
        let h1 = window.document.getElementById('title')
        erase()
 
        h1.append(textBefore)
        h1.append(toColor(letter))
        h1.append(textAfter)
        setNextStep(nextStep + 1)
    }

    function erase(){
        window.document.getElementById('title').innerHTML = ''
    }

    function toSlice(index){
        const splited = title.split("")

        if(index == 0){
            setTextBefore(' ')
        } else {
            let before = splited.slice(0,index)
            let stringBefore = before.toString().replace(/,/g,'')

            setTextBefore(stringBefore)
        }

        if(index == 33){
            setTextAfter(' ')
        } else {
            let after = splited.slice(index + 1)
            let stringAfter = after.toString().replace(/,/g,'')

            setTextAfter(stringAfter)
        }
    }

    function toColor(letter){
        span.innerHTML = letter
        span.style.color = 'yellow'
        span.style.fontSize = '80px'
        span.style.textShadow = '0px 0px 50px yellow'

        return span
    }
   
    return(
        <section className={styles.presentation}>
            <h1 id='title'>{title}</h1>
    
            <p className={styles.text}>
                Atento as mais novas tecnologias para trazer as<br/>
                melhores soluções às suas demandas de sistemas, seja<br/>
                uma simples página de apresentação ou e-commerce completo.
            </p>

            <Button href="https://www.linkedin.com/in/eder-ts/details/certifications/" text="Meus certificados" />
        </section>
    )
}