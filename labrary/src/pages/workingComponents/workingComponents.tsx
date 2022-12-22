import style from './workingComponents.module.css'

import Input from '../../components/inputs/inputs'


import logo from "../../assets/example-logo.svg"



export default function module(){
    let selectObject:any

    function change() {
        console.log('hello')
    }

    return <div class={style.body}>
        <div class={style.inputs}>
            <Input valueCb={change}>test</Input>
        </div>
        
    </div>
}