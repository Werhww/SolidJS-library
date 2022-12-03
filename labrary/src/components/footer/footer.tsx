import { router } from '@klevn/solid-router';

import style from './footer.module.css';

interface props {
  logoLink:string
  logo:any
  privacyLink:string
  termsLink:string
}

export default function footer({logoLink, privacyLink, termsLink, logo}:props) {
  return (
    <div class={style.footer}>
        <img class={style.logo} onclick={()=>{router.update(logoLink)}} src={logo} alt="Logo" />
        <div class={style.content}>
          <div>
            <a href={privacyLink}>Privacy Policy</a>
            <a href={termsLink}>Terms & Conditions</a>
          </div>
        </div>
    </div>
  );
}
