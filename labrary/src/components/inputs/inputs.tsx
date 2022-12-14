import { createSignal } from 'solid-js';
import style from './inputs.module.css';


interface props{
    children?:string
    type?:string
    width?:string
    font_size?:string

    valueCb: (element:any) => any
}

export default function input({children, type, width, font_size, valueCb}:props) {
    let element:any

    const module = (<div>
        <input class={style.input} type={type} placeholder={children} ref={element}
            style={{
                "width": width,
                "font-size": font_size
            }}></input>
        <div class={style.underline} style={{
                "width": width,
            }}></div>
    </div>)

    valueCb(element)

    return module
}
