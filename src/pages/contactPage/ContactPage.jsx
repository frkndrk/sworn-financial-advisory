import "./contactPage.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from "react-router-dom";
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import buildOffical from "../../assets/skyscraper-office-building.jpg"
import buildImg from "../../assets/build21.jpeg";
import newBuild from "../../assets/mcpartnersBuilding.jpeg";
import callservice from "../../assets/callcenter123.jpg";
import { useState } from "react";
import HexagonIcon from '@mui/icons-material/Hexagon';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import logoBlue from "../../assets/2.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const ContactPage = () => {

  const [btnState, setBtnState] = useState(false)
  const [btnTxt, setBtnTxt] = useState("Gönder")
  const [icon, setIcon] = useState()
  const [focused, setFocused] = useState(false)

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleClick = (e) => {
    e.preventDefault();

    if (values.phone === "" || values.email === "") {
      alert("Lütfen istenilen bilgileri doldurunuz!")
    } else {
      setBtnState(true)
      setBtnTxt("Gönderiliyor...")
      setIcon(<HexagonIcon />)
      setTimeout(() => {
        setBtnState(false)
        setBtnTxt("Gönderildi")
        setIcon(<FileDownloadDoneIcon />)
        setValues({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: ""
        })
        const subject = encodeURIComponent("İletişim Formu Başvurusu");
        let body = encodeURIComponent(
          `Ad: ${values.name}\nSoyad: ${values.surname}\nEmail: ${values.email}\nTelefon: ${values.phone}\nMesaj: ${values.message}`
        );

        window.location.href = `mailto:Mehmet.ozturk@mcpartners.com?subject=${subject}&body=${body}`;
      }, 3000);
    }
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleFocus = (e) => {
    setFocused(true)
  }



  return (
    <div className='contactPage'>
      <div className="imgContB1">
        <img src={buildOffical} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
        <div className='textOff'>
          <h1>İletişim</h1>
          <h2>Danışmak istediğiniz sorularınız için lütfen arayın</h2>
        </div>
      </div>
      <div className="formCont">
        <div className="map-place">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3060.205682003065!2d32.76946307566187!3d39.914413086059454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMustafa%20Kemal%20Mahallesi%202131.%20Cadde%20Nurda%C4%9F%20Plaza%20No%3A%2030%2F16%20%C3%87ankaya%2FANKARA!5e0!3m2!1str!2str!4v1738933094610!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="place">
            <img src={newBuild} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
          </div>
        </div>
      </div>
      <div className="formCont2">
        <div className="info-desc">
          <div className="info">
            <div className="infoCont">
              <h4>İletişim</h4>
              <h3>0540 099 66 66</h3>
              <h4>E-Mail Adresimiz</h4>
              <h3>Mehmet.ozturk@mcpartners.com</h3>
              <h4>Ofis Adresimiz</h4>
              <h3>Mustafa Kemal Mahallesi 2131. Cadde Nurdağ Plaza No: 30/16 Çankaya/ANKARA</h3>
              <span></span>
              <div className="icons">
                <ul>
                  <a href="https://twitter.com/EnesKarakurt_10" target="_blank" style={{ color: "rgba(28, 65, 119, .9)" }}><li><TwitterIcon fontSize="10px" /></li></a>
                  <a href="https://www.linkedin.com/in/eneskarakurt/" target="_blank" style={{ color: "rgba(28, 65, 119, .9)" }}><li><LinkedInIcon fontSize="10px" /></li></a>
                  <a target="_blank" style={{ color: "rgba(28, 65, 119, .9)" }}><li><InstagramIcon fontSize="10px" /></li></a>
                </ul>
              </div>
            </div>
          </div>
          <div className="desc">
            <img src={callservice} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
            <h2 className="descHeader">Detaylı bilgi almak için arayabilirsiniz.</h2>
          </div>
        </div>
      </div>
      <div className="coffeeCont">
        <div className="textA1">
          <h4>M&C PARTNERS YMM</h4>
          <h1>Kahve içmeye bekleriz <CoffeeIcon fontSize="" /></h1>
          <button className="btnA1"><Link className="link" to="/Iletisim">İletişim</Link></button>
        </div>
        <div className="contA1-1"></div>
      </div>
      <div className="formCont3">
        <div className="logoCont">
          <img className="logo" src={logoBlue} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"></img>
        </div>
        <h1>İletişim Formu</h1>
        <div className="form">
          <form onSubmit={handleClick}>
            <input onChange={onChange} type="text" name="name" placeholder="Adınız" value={values.name} />
            <input onChange={onChange} type="text" name="surname" placeholder="Soyadınız" value={values.surname} />
            <input onChange={onChange} type="email" name="email" placeholder="E-Mail Adresiniz" value={values.email} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onBlur={handleFocus} focused={focused.toString()} />
            <input onChange={onChange} type="tel" name="phone" placeholder="Telefon Numaranız" value={values.phone} pattern="^[0-9]{11}$" onBlur={handleFocus} focused={focused.toString()} />
            <textarea onChange={onChange} name="message" cols="30" rows="15" placeholder="Mesajınız" value={values.message}></textarea>
            <div className="btnFC">
              <button className={btnState ? "btn-fc3 active" : "btn-fc3"}><span className={btnState && "activeIcon"}>{icon}</span>{btnTxt}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage