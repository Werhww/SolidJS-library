import style from './allComponents.module.css'

// NavBar imports
import Navbar from '../../components/navbar/navbar'
import NavLink from '../../components/navbar/navlink/navlink'
import DropLink from '../../components/navbar/dropLink/dropLink'
import navbarlogo from '../../assets/example-logo2.svg'


// Footer imports
import Footer from '../../components/footer/footer'
import footerlogo from '../../assets/example-bigLogo.svg'

// Button imports
import Button from '../../components/buttons/buttons'
import { DefaultButtonStyles } from '../../components/buttons/buttons'
import { TextIconButton } from '../../components/buttons/buttons'
import { IconButton } from '../../components/buttons/buttons'

// working
import logo from '../../assets/example-logo.svg'
import googleIcon from '../../assets/example-loginIcon.svg'

export default function module(){
    function example() {
        alert("test")
    }

    return <div>
        <Navbar logoLink='/' logo={navbarlogo}>
            <DropLink title='drop'>
                <NavLink link='/' active={true}>Home</NavLink>
                <NavLink link='/' active={true}>Home</NavLink>
            </DropLink>
            <NavLink link='/' active={true}>Home</NavLink>       
        </Navbar>

        <DefaultButtonStyles 
            background_Color='var(--blue)'
            border_color='var(--blue)'
            border_radius='2rem'
            drop_shadow_color='var(--blue)'
            text_color='white'
            font_size='1.5rem'
            height='fit-content'
            side_padding='3rem'
            align_items='center'
            justify_content='center'
        ></DefaultButtonStyles>

        <div class={style.buttonExample}>
            <p>3 type of buttons</p>
            <div>
                <Button onclick={example}>Example</Button>
                <TextIconButton onclick={example} icon={googleIcon} justify_content='start'>Log in with google example</TextIconButton>
                <IconButton onclick={example} icon={logo} height='3rem'></IconButton>
            </div>
            
        </div>
        
        <Footer logo={footerlogo} logoLink='url'  privacyLink='expamplelink' termsLink='expamplelink' mail='eksampl@gmail.com'></Footer>
    </div>
}