import React from 'react' ;
import footerbg from "../assets/footerbg.png"
import footerimg from "../assets/footerimg.png"
const Footer = () => {
  return (
  <>
  <section className="footer mt-5">
    <div className="footerbg pt-5">
 <div className="d-flex justify-content-center align-items-center">
 <img src={footerbg} alt="" className="img-fluid img2" />
 </div>
  <div className="d-flex justify-content-center align-items-center">
  <img src={footerimg} alt="" className="img-fluid img1 mt-3" />

<div className="txt mt-3">
    <p>İmam Hüseyn </p>
    <p>Əhli Beyt</p>
    <p>Kərbəla</p>
    <p>Aşura</p>
</div>

  </div>
  <p  className="copyright">
    Copyright © 2023 <a href="#react">Webluna LLC</a> .
    Bütün hüquqlar qorunur
  </p>
    </div>
  </section>
  </>
  )
}

export default Footer