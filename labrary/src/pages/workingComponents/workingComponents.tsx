import style from './workingComponents.module.css'

// working Component
import Footer from '../../components/footer/footer'
import logo from '../../assets/example-logo.svg'


export default function module(){
    return <div>
        <Footer logoLink='ede' logo={logo} privacyLink='dw' termsLink='awe'></Footer>
    </div>
}