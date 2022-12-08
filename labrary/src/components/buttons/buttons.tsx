import style from './buttons.module.css'
var root = document.querySelector(':root');

interface props {
    // all buttons
    onclick:()=>void,
    witdh?:string

    // all buttons with text
    children?:any,
    color?: string,
    fill_Color?:string,
    border_color?:string,
    text_color?:string,
    justify_content?:string

    // all buttos with icon
    icon?:any

    // preset Icons
    arrow?:string,
    add?:string,
    share?:string,
    plus?:string,
    dowload?:string,
    upload?:string,
    
    // only icon buttons
    height?:string,
    filter?:string
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

export function CustomIconButton({icon, onclick, height}:props){
    return <div class={`${style.default} ${style.iconShadow}`} onclick={onclick}>
        <img src={icon} style={`height:${height};`}/>
    </div>
}

/// Icon svg imports ///
import arrow1 from './icons/arrow-filled.svg'
import arrow2 from './icons/arrow-outline.svg'
import arrow3 from './icons/circle-arrow-filled.svg'
import arrow4 from './icons/circle-arrow-outline.svg'

import add1 from './icons/add-user-filled.svg'
import add2 from './icons/add-user-outline.svg'
import add3 from './icons/new-file-1.svg'
import add4 from './icons/new-file-2.svg'
import add5 from './icons/new-folder-1.svg'

import share1 from './icons/share-arrows-filled.svg'
import share2 from './icons/share-arrows-outline.svg'

import plus1 from './icons/plus-sign-filled.svg'
import plus2 from './icons/plus-sign-outline.svg'
import plus3 from './icons/plus-square-outline.svg'

import upload2 from './icons/upload.svg'
import download1 from './icons/download.svg'

export function IconButton({onclick, arrow, add, share, plus, dowload, upload, height, filter}:props){
    function icon(){
        if(arrow == "1"){
            return arrow1
        } else if(arrow == "2"){
            return arrow2
        } else if(arrow == "3"){
            return arrow3
        } else if(arrow == "4"){
            return arrow4
        }

        if(add == "1"){
            return add1
        } else if(add == "2"){
            return add2
        } else if(add == "3"){
            return add3
        } else if(add == "4"){
            return add4
        } else if(add == "5"){
            return add5
        }

        if(share == "1"){
            return share1
        } else if(share == "2"){
            return share2
        }

        if(plus == "1"){
            return plus1
        } else if(plus == "2"){
            return plus2
        } else if(plus == "3"){
            return plus3
        }

        if(dowload == "1"){
            return download1
        } else if(upload == "1"){
            return upload2
        }

    }
    return <img class={`${style.default} ${style.iconButton}`} src={icon()} style={{
        "height": height,
        "filter": filter,
    }} onClick={onclick}/>
}

export function TextIconButton({children, icon, onclick, fill_Color, border_color, text_color, justify_content, witdh, filter}:props){
    return <div class={`${style.default} ${style.textIconButton}`} 
    style={{
        "border": `1px solid ${border_color}`, 
        "background-color":fill_Color, 
        "justify-content": justify_content, 
        "width": witdh, 
        "filter": filter
        }} onClick={onclick}>
        <img class={style.loginIcon} src={icon} />
        <p style={`color: ${text_color};`}>{children}</p>
    </div>
}

