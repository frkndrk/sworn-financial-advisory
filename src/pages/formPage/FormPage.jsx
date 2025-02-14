import { useState } from 'react';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import "./formPage.scss"
import buildOffical from "../../assets/plaza11.jpg"
import logoBlue from "../../assets/2.png"
import HexagonIcon from '@mui/icons-material/Hexagon';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const FormPage = () => {

  const [btnState, setBtnState] = useState(false)
  const [btnTxt, setBtnTxt] =  useState("Gönder")
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
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='formPage'>
        <div className="imgContB1">
          <img src={buildOffical} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
          <div className='textOff'>
            <h1>İletişim</h1>
            <h2>Danışmak istediğiniz sorularınız için lütfen arayın</h2>
          </div>
        </div>
        <div className="formCont3">
          <div className="logoCont">
            <img className="logo" src={logoBlue} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"></img>
          </div>
          <h1>İletişim Formu</h1>
          <div className="form">
            <form onSubmit={handleClick}>
              <input onChange={onChange} type="text" name="name" placeholder="Adınız" value={values.name}/>
              <input onChange={onChange} type="text" name="surname" placeholder="Soyadınız" value={values.surname}/>
              <input onChange={onChange} type="email" name="email" placeholder="E-Mail Adresiniz" value={values.email} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onBlur={handleFocus} focused={focused.toString()}/>
              <input onChange={onChange} type="tel" name="phone" placeholder="Telefon Numaranız" value={values.phone} pattern="^[0-9]{11}$" onBlur={handleFocus} focused={focused.toString()}/>
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

export default FormPage