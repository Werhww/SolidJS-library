import { createSignal } from 'solid-js'

import  style from './dropLink.module.css'
import arrow from './arrow.svg'

interface props {
    children:any
    title:string
}

export default function module({children, title}:props){
    const [arrowAni, setArrowAni] = createSignal()
    const [dropAni, setDropAni] = createSignal()
    const [dropOpen, setDropOpen] = createSignal(false)

    return <div class={style.body} onClick={()=>{
        dropOpen()?setArrowAni(style.arrowAniOut):setArrowAni(style.arrowAniIn)
        dropOpen()?setDropAni(style.linksAniOut):setDropAni(style.linksAniIn)
        dropOpen()?setDropOpen(false):setDropOpen(true)
    }}>
        <p>{title}</p>
        <img class={`${style.arrow} ${arrowAni()}`} src={arrow}/>

        
        <div class={`${style.content} ${dropAni()}`}>
          {children}  
        </div> 
    </div>
}