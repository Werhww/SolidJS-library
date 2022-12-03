import style from './workingComponents.module.css'

// working Component
import Navbar from '../../components/navbar/navbar'
import NavLink from '../../components/navbar/navlink/navlink'

interface props{

}

export default function module(){
    return <div>
        <Navbar iconLink='/'>
            <NavLink link='/' active={true}>Home</NavLink>
            <NavLink link='/' active={false}>Futter</NavLink>
            <NavLink link='/' active={false}>Navlinks</NavLink>
            <NavLink link='/' active={false}>DEgfedfe</NavLink>
            <NavLink link='/' active={false}>Hello</NavLink>
        </Navbar>
    </div>
}