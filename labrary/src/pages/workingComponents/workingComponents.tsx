import style from './workingComponents.module.css'

import Button from '../../components/buttons/buttons'
import { IconButton } from '../../components/buttons/buttons'
import { TextButton } from '../../components/buttons/buttons'


// working
import icon from '../../assets/example-logo.svg'

export default function module(){
    function exsample() {
        console.log('test')
    }

    return <div>
        <IconButton onclick={exsample} icon={icon}></IconButton>
        <Button onclick={exsample}>Save</Button>
        <Button onclick={exsample}>TextButton</Button>
    </div>
}