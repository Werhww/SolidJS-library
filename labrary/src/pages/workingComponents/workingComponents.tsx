import style from './workingComponents.module.css'

import Navbar from '../../components/navbar/navbar'
import Navlink from '../../components/navbar/navlink/navlink'
import DropLink from '../../components/navbar/dropLink/dropLink'

import logo from "../../assets/example-logo.svg"



export default function module(){
    let selectObject:any

    function change() {
        console.log('hello')
        console.log(selectObject.value)
    }

    return <div class={style.body}>
        <Navbar logo={logo} logoLink="/all">
            <Navlink active={false} link='/test'>Home</Navlink>
            <Navlink active={true} link='/'>Back</Navlink>
        </Navbar>
    </div>
}