import style from './workingComponents.module.css'

import Input from '../../components/inputs/inputs'


export default function module(){
    function example() {
        console.log('test')
    }

    let input:any

    function getInput(ref:any) {
        input = ref
    }


    function printInput() {
        console.log(input.value)
    }


    return <div class={style.body}>
        <Input type="text" width='10rem' font_size='1.25rem' valueCb={getInput}>Name</Input>
        <p onClick={()=>(printInput())}>click</p>
    </div>
}