import style from './workingComponents.module.css'

// working Component
import Footer from '../../components/footer/footer'
import logo from '../../assets/example-bigLogo.svg'


export default function module(){
    return <div>
        <Footer logo={logo} logoLink='url'  privacyLink='expamplelink' termsLink='expamplelink' mail='eksampl@gmail.com'></Footer>
    </div>
}