import { router } from '@klevn/solid-router';
import { createSignal } from 'solid-js';

import style from './navbar.module.css'
import logo from './logo.svg'
import hamburger from './hamburger.svg'

interface props {
    children:any,
    iconLink:string
}

export default function module({children, iconLink}:props) {
    const [hamburgerOpen, setHamburgerOpen] = createSignal(false)
    const [linksAni, setlinksAni] = createSignal()
    const [backgroundAni, setBackgroundAni] = createSignal()

    return (
    <div class={style.navbar}>
        <div>
            <img class={style.logo} onclick={()=>{router.update(iconLink)}} src={logo} alt="logo"/>
        </div>
        <img class={style.hamburger} src={hamburger} onClick={()=>{
            hamburgerOpen()?setlinksAni(style.itemsAniOut):setlinksAni(style.itemsAniIn)
            hamburgerOpen()?setBackgroundAni(style.backgroundAniOut):setBackgroundAni(style.backgroundAniIn)
            hamburgerOpen()?setHamburgerOpen(false):setHamburgerOpen(true)
        }}></img>
        <div class={`${style.background} ${backgroundAni()}`}></div>

        <div class={`${style.links} ${linksAni()}`}>{children}</div>
    </div>)
}
