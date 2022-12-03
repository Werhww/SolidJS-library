import { router } from '@klevn/solid-router';

import style from './navlink.module.css'

interface props {
    children:any, 
    active:boolean, 
    link:string
}

export default function module({children, active, link}:props) {
    const activeClass = active ? style.active : ""

    return <p class={activeClass} onclick={()=>{router.update(link)}}>{children}</p>
}