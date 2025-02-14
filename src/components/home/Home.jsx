import "./home.scss"
import React, { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import homeImg1 from "../../assets/tam-tasdik.jpg";
import homeImg2 from "../../assets/vergi-denetimi-tasdik.jpg";
import homeImg3 from "../../assets/vergi-incelemesi.jpg";
import homeImg4 from "../../assets/vergi-iadesi.jpg";

const Home = () => {

  const [currentState, setCurrentState] = useState(0)

  const homeImages = [
    {
      id: 1,
      img: homeImg1,
      descH2: "M&C PARTNERS",
      descH1: "Yeminli Mali Müşavirlik A.Ş.",
      descP: "VERGİYE DAİR HER TÜRLÜ SORUNUNUZU UZMANLIKLA ÇÖZÜYOR VE İŞİNİZİ BÜYÜTÜYORUZ"
    },
    {
      id: 2,
      img: homeImg2,
      descH2: "M&C PARTNERS",
      descH1: "Denetim ve Tasdik Hizmetleri",
      desc1: "TEKLİF AL",
      desc2: "HIZLI İLETİŞİM"
    },
    {
      id: 3,
      img: homeImg3,
      descH2: "M&C PARTNERS YMM",
      descH1: "Vergi İadesi Hizmetleri",
      desc1: "TEKLİF AL",
      desc2: "HIZLI İLETİŞİM"
    },
    {
      id: 4,
      img: homeImg4,
      descH2: "M&C PARTNERS YMM",
      descH1: "Vergi Danışmanlığı Hizmetleri",
      desc1: "TEKLİF AL",
      desc2: "HIZLI İLETİŞİM"
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])

  const clickArrowLeft = () => {
    if (currentState === 0) {
      setCurrentState(3)
    } else {
      setCurrentState(currentState - 1)
    }
  }

  const clickArrowRight = () => {
    if (currentState === 3) {
      setCurrentState(0)
    } else {
      setCurrentState(currentState + 1)
    }
  }

  return (
    <div className="home">
      <div className="contHomeA">
        {homeImages.map((image, index) => (
          <img
            key={index}
            className="homeImg1"
            src={image.img}
            alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"
            style={{ opacity: index === currentState ? 0.5 : 0 }}
          />
        ))}
      </div>
      <div className="contHome11">
        {homeImages.map((item, index) => (
          <div className="header1"
            key={index}
            style={{ opacity: index === currentState ? 1 : 0 }}>
            <h2>{item.descH2}</h2>
            <h1>{item.descH1}</h1>
            <p>{item.descP}</p>
          </div>
        ))}
        {homeImages.map((item, index) => (
          <div key={index} className="buttons">
            <Link className="link lnk" to="/Teklif-Al"><button style={{ opacity: index === currentState ? 1 : 0, display: !item.desc1 && "none" }}>{item.desc1}</button></Link>
            <Link className="link lnk" to="/Iletisim"><button style={{ opacity: index === currentState ? 1 : 0, display: !item.desc2 && "none" }}>{item.desc2}</button></Link>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={clickArrowLeft} className="left"><ArrowBackIosNewIcon style={{ color: "rgb(28, 65, 119)" }} /></button>
        <button onClick={clickArrowRight} className="right"><ArrowBackIosNewIcon style={{ color: "rgb(28, 65, 119)" }} /></button>
      </div>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
{/*       <div className="contact-icons">
        <a href="https://api.whatsapp.com/send?phone=905400996666" target="_blank" ><WhatsAppIcon className="whatsapp"/><span className="shadow"></span><span className="shadow2"></span></a>
      </div> */}
    </div>
  )
}

export default Home