import style from './buttons.module.css'

interface props {
    onclick:()=>void,

    color?: string,
    children?:any,
    icon?:any
}

export default function button({children,onclick}:props) {
    return (
    <div class={style.button} onclick={onclick}>
        <p class={style.buttonText}>{children}</p>
    </div>)
}

export function TextButton({children,onclick}:props) {
    return (
    <div onclick={onclick}>
        <p>{children}</p>
    </div>)
}

export function IconButton({icon, onclick}:props){
    return (
    <div class={style.button} onclick={onclick}>
        <img class={style.icon} src={icon} alt="icon" />
    </div>)
}
