import styles from './buttons.module.css'
var root:any = document.querySelector(':root');

interface props {
    background_Color?:string,
    border_color?:string,
    border_radius?:string,
    drop_shadow_color?:string,
    text_color?:string,
    font_size?:string,
    align_items?:string,
    justify_content?:string,
    height?:string,
    side_padding?:string,

    customClass?:string

    onclick?:()=>void,

    children?:any,
    icon?:any,
    filter?:string,
    rotate?:string,
}

interface defaults{
    background_Color?:string,
    border_color?:string,
    border_radius?:string,
    drop_shadow_color?:string,
    text_color?:string,
    font_size?:string,
    height?:string,
    side_padding?:string,
    align_items?:string,
    justify_content?:string,
}

export function DefaultButtonStyles({background_Color, border_color, border_radius, drop_shadow_color, text_color, font_size, height, side_padding, align_items, justify_content}:defaults){
    const properties = {
        "--button_background_color": background_Color,
        '--button_border_color': border_color,
        '--button_border_radius': border_radius,
        '--button_drop_shadow_color': drop_shadow_color,
        '--button_text_color': text_color,
        '--button_font_size': font_size,
        '--button_height': height,
        '--button_side_padding': side_padding,
        '--button_align_items': align_items,
        '--button_justify_content': justify_content
    }

    for(var [key,value] of Object.entries(properties)){
        if(value)root.style.setProperty(key, value);
    }
    return <></>
}

export default function Button({onclick, children, customClass}:props) { 
    return (
    <p class={`${styles.default} ${customClass}`} onclick={onclick}>
        {children}
    </p>)
}

export function IconButton({onclick, icon, rotate, filter, height, side_padding}:props){
    return <div class={styles.iconButton} onclick={onclick}>
        <img src={icon} 
            style={{
                "height": height,
                "padding-left": side_padding,
                "padding-right": side_padding,
                "rotate": rotate,
                "filter": filter
            }}
        />
    </div>
}

export function TextIconButton({children, icon, onclick, filter, background_Color, border_color, border_radius, text_color, justify_content, side_padding, height}:props){
    return <div class={styles.textIconButton} onClick={onclick}
    style={{ 
        "background-color":background_Color,
        "border": `1px solid ${border_color}`,
        "border-radius": border_radius,
        "color": text_color,
        "justify-content": justify_content, 
        "padding-left": side_padding,
        "padding-right": side_padding
        }}>
        <img class={styles.loginIcon} src={icon} 
            style={{
                "filter": filter, 
                "height": height
            }}
        />
        <p style={`color: ${text_color};`}>{children}</p>
    </div>
}

