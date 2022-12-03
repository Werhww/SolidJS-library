import style from './allComponents.module.css'

// NavBar imports
import Navbar from '../../components/navbar/navbar'
import NavLink from '../../components/navbar/navlink/navlink'
import DropLink from '../../components/navbar/dropLink/dropLink'


export default function module(){
    return <div>
        <Navbar iconLink='/'>
            <DropLink title='drop'>
                <NavLink link='/' active={true}>Home</NavLink>
                <NavLink link='/' active={true}>Home</NavLink>
            </DropLink>
            <NavLink link='/' active={true}>Home</NavLink>       
        </Navbar>
    </div>
}