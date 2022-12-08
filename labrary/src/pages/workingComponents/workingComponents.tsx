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

        <Button onclick={example}>Save</Button>
        <TextIconButton onclick={example} icon={logo} height='4rem' justify_content='baseline'>Log in with google</TextIconButton>
        <IconButton onclick={example} icon={googleIcon} height='3rem'></IconButton>
    </div>
}