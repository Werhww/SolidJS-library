import style from './allComponents.module.css'

// NavBar imports
import Navbar from '../../components/navbar/navbar'
import NavLink from '../../components/navbar/navlink/navlink'
import DropLink from '../../components/navbar/dropLink/dropLink'

// Footer imports
import Footer from '../../components/footer/footer'
import logo from '../../assets/example-bigLogo.svg'

export default function module(){
    return <div>
        <Navbar iconLink='/'>
            <DropLink title='drop'>
                <NavLink link='/' active={true}>Home</NavLink>
                <NavLink link='/' active={true}>Home</NavLink>
            </DropLink>
            <NavLink link='/' active={true}>Home</NavLink>       
        </Navbar>

        <Footer logo={logo} logoLink='url'  privacyLink='expamplelink' termsLink='expamplelink' mail='eksampl@gmail.com'></Footer>
    </div>
}