import { classList } from 'solid-js/web'
import style from './buttons.module.css'


interface props {
    // all buttons
    onclick:()=>void,

    // all buttons with text
    children?:any,
    color?: string,

    // all buttos with icon
    icon?:any
    
    // only icon buttons
    height?:string


    witdh?:string


    // only login buttons for now
    fill_Color?:string
    border_color?:string
    text_color?:string
    justify_content?:string
}

export default function button({children,onclick, fill_Color, border_color, text_color, justify_content, witdh}:props) {
    return (
    <p class={`${style.default} ${style.defaultButton}`} style={{
        "border": `1px solid ${border_color}`,
        "background-color": `1px solid ${border_color}`,
        "justify-content": justify_content,
        "width": witdh,
        "color": `${text_color}`,
    }} onclick={onclick}>
        {children}
    </p>)
}

export function SmallIconButton({icon, onclick}:props){
    return <div class={`${style.default} ${style.iconShadow}`} onclick={onclick}>
        <img class={style.smallIcon} src={icon}/>
    </div>
}

export function MediumIconButton({icon, onclick}:props){
    return <div class={`${style.default} ${style.iconShadow}`} onclick={onclick}>
        <img class={style.mediumIcon} src={icon}/>
    </div>
}

export function BigIconButton({icon, onclick}:props){
    return <div class={`${style.default} ${style.iconShadow}`} onclick={onclick}>
        <img class={style.bigIcon} src={icon}/>
    </div>
}

export function CustomIconButton({icon, onclick, height}:props){
    return <div class={`${style.default} ${style.iconShadow}`} onclick={onclick}>
        <img src={icon} style={`height:${height};`}/>
    </div>
}

export function LoginButton({children, icon, onclick, fill_Color, border_color, text_color, justify_content, witdh}:props){
    return <div class={`${style.default} ${style.loginButton}`} 
    style={`
        border: 1px solid ${border_color}; 
        background-color: ${fill_Color}; 
        justify-content: ${justify_content}; 
        width: ${witdh};`
    } onClick={onclick}>
        <img class={style.loginIcon} src={icon} />
        <p style={`color: ${text_color};`}>{children}</p>
    </div>
}
