import React from 'react' ;
import footerbg from "../assets/footerbg.png"
import footerimg from "../assets/footerimg.png"
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const {t} = useTranslation();
  return (
  <>
  <section className="footer">
    <div className="footerbg pt-5">
 <div className="d-flex justify-content-center align-items-center">
 <img src={footerbg} alt="" className="img-fluid img2" />
 </div>
  <div className="d-flex justify-content-center align-items-center">
  <img src={footerimg} alt="" className="img-fluid img1 mt-3" />

<div className="txt mt-3">
    <p>  {t('nav.0')} </p>
    <p>  {t('nav.1')}</p>
    <p>  {t('nav.2')}</p>
    <p>  {t('nav.3')}</p>
</div>

  </div>
  <p  className="copyright">
  {t('nav.8')} © 2023 <a href="#react">Webluna LLC</a> .
  {t('nav.9')}
  </p>
    </div>
  </section>
  </>
  )
}

export default Footer