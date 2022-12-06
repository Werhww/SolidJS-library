import style from './workingComponents.module.css'

import Button from '../../components/buttons/buttons'
import { LoginButton } from '../../components/buttons/buttons'

import { SmallIconButton } from '../../components/buttons/buttons'
import { MediumIconButton } from '../../components/buttons/buttons'
import { BigIconButton } from '../../components/buttons/buttons'
import { CustomIconButton } from '../../components/buttons/buttons'

// working
import logo from '../../assets/example-logo.svg'
import googleIcon from '../../assets/example-loginIcon.svg'

export default function module(){
    function example() {
        console.log('test')
    }

    return <div class={style.body}>
        <SmallIconButton onclick={example} icon={googleIcon}></SmallIconButton>
        <MediumIconButton onclick={example} icon={googleIcon}></MediumIconButton>
        <BigIconButton onclick={example} icon={googleIcon}></BigIconButton>
        <CustomIconButton onclick={example} icon={googleIcon} height={'10rem'}> </CustomIconButton>
        <Button onclick={example}>test</Button>
        <LoginButton onclick={example} icon={googleIcon} justify_content="center">Sign in with Google</LoginButton>
    </div>
}