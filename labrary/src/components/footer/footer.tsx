import { router } from '@klevn/solid-router';

import style from './footer.module.css';

import aboutLogo from './logo.svg'

interface props {
  logoLink:string
  logo:any
  privacyLink:string
  termsLink:string
  mail:string
}

export default function footer({logoLink, privacyLink, termsLink, logo, mail}:props) {
  return (
    <div class={style.footer}>
        <img class={style.logo} onclick={()=>{router.update(logoLink)}} src={logo} alt="Logo" />
        <div class={style.content}>
          <div class={style.policy}>
            <a href={privacyLink}>Privacy Policy</a>
            <a href={termsLink}>Terms & Conditions</a>
          </div>
          <div class={style.about}>
            <div>
              <div class={style.aboutRow1}>
                <p>About</p>
              <img class={style.aboutLogo} src={aboutLogo} onclick={()=>{location.href='https://lkleppe.com'}} alt="logo" />
            </div>
            </div>
            <div class={style.aboutCol2}>
              <div class={style.aboutRow2}>
                <p>Creator:</p>
                <p>Leo Walbeck Kleppe</p>
              </div>
              <div class={style.aboutRow3}>
                <p>Website:</p>
                <a href="https://lkleppe.com">LKleppe.com</a>
              </div>
            </div>
          </div>
          <div class={style.contact}>
            <p>Contact</p>
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
        </div>
    </div>
  );
}
