import style from './allComponents.module.css'

// NavBar imports
import Navbar from '../../components/navbar/navbar'
import NavLink from '../../components/navbar/navlink/navlink'
import DropLink from '../../components/navbar/dropLink/dropLink'
import navbarlogo from '../../assets/example-logo2.svg'


// Footer imports
import Footer from '../../components/footer/footer'
import footerlogo from '../../assets/example-bigLogo.svg'

export default function module(){
    return <div>
        <Navbar logoLink='/' logo={navbarlogo}>
            <DropLink title='drop'>
                <NavLink link='/' active={true}>Home</NavLink>
                <NavLink link='/' active={true}>Home</NavLink>
            </DropLink>
            <NavLink link='/' active={true}>Home</NavLink>       
        </Navbar>

        <Footer logo={footerlogo} logoLink='url'  privacyLink='expamplelink' termsLink='expamplelink' mail='eksampl@gmail.com'></Footer>
    </div>
}