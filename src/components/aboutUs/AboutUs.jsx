import "./aboutUs.scss"
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import CallIcon from '@mui/icons-material/Call'
import { Link } from "react-router-dom";
import service1 from "../../assets/confirmation.jpg"
import service2 from "../../assets/1687.jpg"
import service3 from "../../assets/17471.jpg"
import service4 from "../../assets/handShake5.jpg"
import service5 from "../../assets/3156.jpg"
import service6 from "../../assets/computer.jpg"
import service7 from "../../assets/calculate2.jpg"
import service8 from "../../assets/handShake3.webp"
import service9 from "../../assets/meeting6.jpg"
import service10 from "../../assets/meeting2.jpg"
import service11 from "../../assets/2148769672.jpg"
import shape from "../../assets/shape1.png"
import handShake from "../../assets/handShake2.avif"
import polkadots from "../../assets/polkadots.png"
import logoBlue from "../../assets/2.png"
import Dos1 from "../../components/detailsOfService/Dos1";
import Dos2 from "../../components/detailsOfService/Dos2";
import Dos3 from "../../components/detailsOfService/Dos3";
import Dos4 from "../../components/detailsOfService/Dos4";
import Dos5 from "../../components/detailsOfService/Dos5";
import Dos6 from "../../components/detailsOfService/Dos6";
import Dos7 from "../../components/detailsOfService/Dos7";
import Dos8 from "../../components/detailsOfService/Dos8";
import Dos9 from "../../components/detailsOfService/Dos9";
import Dos10 from "../../components/detailsOfService/Dos10";
import Dos11 from "../../components/detailsOfService/Dos11";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
      const timer = setTimeout(() => {
        if(currentSlide === 8) {
          setCurrentSlide(0)
        } else {
          setCurrentSlide(currentSlide + 1)
        }
      }, 5000)
      return () => clearTimeout(timer)
  },[currentSlide])
  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 8)
      : setCurrentSlide(currentSlide < services.length - 3 ? currentSlide + 1 : 0)
  }

  const services = [
    {
      id: 1,
      name: "Tam Tasdik Hizmetleri",
      img: service1,
      path: "tam-tasdik-hizmetleri",
      compDos: <Dos1 />
    },
    {
      id: 2,
      name: "Vergi İadesi Hizmetleri",
      img: service2,
      path: "vergi-iadesi-hizmetleri",
      compDos: <Dos2 />
    },
    {
      id: 3,
      name: "Vergi İncelemesi Danışmanlığı Hizmetleri",
      img: service3,
      path: "vergi-incelemesi-danismanligi-hizmetleri",
      compDos: <Dos3 />
    },
    {
      id: 4,
      name: "İzaha Davet Uygulaması Danışmanlık Hizmetleri",
      img: service4,
      path: "izaha-davet-uygulamasi-danismanlik-hizmetleri",
      compDos: <Dos4 />
    },
    {
      id: 5,
      name: "Gönüllü Uyum Danışmanlık Hizmetleri",
      img: service5,
      path: "gonullu-uyum-danismanlik-hizmetleri",
      compDos: <Dos5 />
    },
    {
      id: 6,
      name: "Birleşme, Bölünme, Tür Değiştirme ve Devir İşlemleri Yönetimi Hizmetleri",
      img: service6,
      path: "birlesme-bolunme-tur-degistirme-ve-devir-islemleri-yonetimi-hizmetleri",
      compDos: <Dos6 />
    },
    {
      id: 7,
      name: "Özel Denetim, İç Denetim ve Raporlama Hizmetleri",
      img: service7,
      path: "ozel-denetim-ic-denetim-ve-raporlama-hizmetleri",
      compDos: <Dos7 />
    },
    {
      id: 8,
      name: "Muhasebe Sistemleri Kurulması ve Süreç Yönetimi Hizmetleri",
      img: service8,
      path: "muhasebe-sistemleri-kurulmasi-ve-surec-yonetimi-hizmetleri",
      compDos: <Dos8 />
    },
    {
      id: 9,
      name: "Asgari İşçilik Uygulaması ve Raporlama Hizmetleri",
      img: service8,
      path: "asgari-iscilik-uygulamasi-ve-raporlama-hizmetleri",
      compDos: <Dos9 />
    },
    {
      id: 10,
      name: "Vergi Planlaması Hizmetleri",
      img: service8,
      path: "vergi-planlamasi-hizmetleri",
      compDos: <Dos10 />
    },
    {
      id: 11,
      name: "Diğer Tasdik ve Özel Amaçlı Raporlama Hizmetleri",
      img: service8,
      path: "diger-tasdik-ve-ozel-amacli-raporlama-hizmetleri",
      compDos: <Dos11 />
    }
  ]

  return (
    <div className='aboutUs'>
      <div className="contHeader">
        <div className="logoCont">
          <img className="logo" src={logoBlue} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"></img>
        </div>
        <h1>Hizmet Alanlarımız</h1>
      </div>
      <div className="container">
        <div className="slider2">
          {services.map((item) => (
            <Link to={"/Hizmetler/" + `${item.path}` } key={item.id} style={{textDecoration: "none", color: "#000000"}}>
              <div key={item.id} className="contCards2">
                <div className="card2">
                  <div className="contImg2">
                    <img src={item.img} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"/>
                  </div>
                  <div className="contName2">
                    <h3>{item.name}</h3>
                  </div>
                </div>
                <div className="hvrCnt2">
                  <h1>M&C PARTNERS</h1>
                  <h3>Hizmet Alanlarımız</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="toCustomer">
        <div className="description">
          <div className="descCont">
            <h1>Vergiye dair her türlü sorununuzu uzmanlıkla çözüyor ve işinizi büyütüyoruz</h1>
            <p className="desc1">M&C Partners Yeminli Mali Müşavirlik Anonim Şirketi profesyonel ekibi ile hızlı, dürüst, güvenilir ve yerinde hizmet sunarak müşteri ve paydaşlarına değer katmayı kendisine ilke edinen, sunmuş olduğu hizmetlerin kalitesinde kendisi ile yarışan, Dünya standartlarında Yeminli Mali Müşavirlik, Denetim, Danışmanlık ve Vergi Planlaması konularında hizmet vermeyi kendisine amaç edinmiş bir kuruluştur.</p>
            <div className="cont1">
              <Link to="/Kurumsal" style={{textDecoration: "none", color: "#fff"}}><button>DEVAMI İÇİN</button></Link>
              <div className="contact">
                <ul>
                  <li className="clIcn" style={{backgroundColor: "rgb(28, 65, 119)", color: "white", borderRadius: "50%"}}><CallIcon /></li>
                  <li>
                    <p className="fontColor">Sabit Hattımız</p>
                    <p className="fontColor">0 506 313 31 37</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="descImg">
          <img className="desc2" src={shape} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
          <img className="desc3" src={handShake} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
          <img className="desc4" src={polkadots} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
        </div>
      </div>
      <div className="contA1">
        <div className="textA1">
          <h4><span>M&C PARTNERS</span> <span>YMM</span></h4>
          <h1>Denetim, Tasdik ve Danışmanlık Alanlarında Bizlere Ulaşabilirsiniz.</h1>
          <button className="btnA1"><Link className="link" to="/Iletisim">İletişim</Link></button>
        </div>
        <div className="contA1-1"></div>
      </div>
    </div>
  )
}

export default AboutUs