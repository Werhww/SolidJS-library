import style from './workingComponents.module.css'

import Select from '../../components/select/select'
import SelectItem from '../../components/select/selectItem/selectItem'


export default function module(){
    let selectObject:any

    function change() {
        console.log('hello')
        console.log(selectObject.value)
    }

    return <div class={style.body}>
        <Select ref={selectObject} onChange={change}>
            <SelectItem value='15'>fish</SelectItem>
            <SelectItem value='1135'>fses</SelectItem>
            <SelectItem value='1415'>fi441sh</SelectItem>
        </Select>
    </div>
}