import style from './workingComponents.module.css'

import Button from '../../components/buttons/buttons'
import { DefaultButtonStyles } from '../../components/buttons/buttons'
import { TextIconButton } from '../../components/buttons/buttons'
import { IconButton } from '../../components/buttons/buttons'

// working
import logo from '../../assets/example-logo.svg'
import googleIcon from '../../assets/example-loginIcon.svg'

export default function module(){
    function example() {
        console.log('test')
    }


    return <div class={style.body}>
        <DefaultButtonStyles 
            background_Color='var(--blue)' 
            border_color='var(--blue)' 
            drop_shadow_color='var(blue)'
            border_radius='5rem'
            text_color='white' 
            width='5rem'
        ></DefaultButtonStyles>

        <Button onclick={example}>Save</Button>
        <TextIconButton onclick={example} icon={logo} width="20rem" height='13rem'>Log in with google</TextIconButton>
        <IconButton onclick={example} icon={googleIcon} height='3rem'></IconButton>
    </div>
}