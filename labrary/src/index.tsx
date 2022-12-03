import { router } from "@klevn/solid-router" 

import './index.css';

//pages
import Main from "./pages/workingComponents/workingComponents"
import All from "./pages/allComponents/allComponents"

router.add("/", () => {
    return <Main></Main>
})

router.add("/all", () => {
    return <All></All>
})


// Important
router.update()