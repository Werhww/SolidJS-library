import style from './workingComponents.module.css'

import Button from '../../components/buttons/buttons'
import { TextIconButton } from '../../components/buttons/buttons'
import { IconButton } from '../../components/buttons/buttons'
import { CustomIconButton } from '../../components/buttons/buttons'

// working
import logo from '../../assets/example-logo.svg'
import googleIcon from '../../assets/example-loginIcon.svg'

export default function module(){
    function example() {
        console.log('test')
    }

    return <div class={style.body}>
        <CustomIconButton onclick={example} icon={googleIcon}> </CustomIconButton>
        <Button onclick={example}>test</Button>
        <TextIconButton onclick={example} icon={googleIcon}>Sign in with Google</TextIconButton>
        <IconButton onclick={example} arrow="1"></IconButton>
    </div>
}