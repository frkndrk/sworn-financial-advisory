import { useEffect, useState } from "react"
import "./servicePage.scss"
import CallIcon from '@mui/icons-material/Call'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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
import { Link, useParams } from "react-router-dom";
import service1 from "../../assets/working-done.webp"
import service2 from "../../assets/dualMeeting.jpg"
import service3 from "../../assets/calculate1.jpg"
import service4 from "../../assets/handShake1.jpg"
import service5 from "../../assets/vergi-denetimi-tasdik.jpg"
import service6 from "../../assets/computer.jpg"
import service7 from "../../assets/calculate2.jpg"
import service8 from "../../assets/handShake3.webp"
import meeting from "../../assets/meeting4.jpg"
import analytics2 from "../../assets/analytics2.webp"
import meeting6 from "../../assets/meeting6.jpg"
import customerService from "../../assets/customer-service.jpg"
import plaza3 from "../../assets/plaza3.webp"
import callservice2 from "../../assets/callservice.jpg"


const ServicePage = () => {
  const [selectedService, setSelectedService] = useState("")

  const { serviceName } = useParams();

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

  const [currentState, setCurrentState] = useState(0)

  const homeImages = [
    {
      id: 1,
      img: meeting
    },
    {
      id: 2,
      img: analytics2
    },
    {
      id: 3,
      img: meeting6
    },
    {
      id: 4,
      img: customerService
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
    <div className='servicePage'>
      <div className="imgContB1">
        <img src={plaza3} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
        <div className='textOff'>
          <h1>
            {serviceName
              ?
              `${services.filter((item) => item.path === serviceName)
                .map((macthedService) => macthedService.name)}`
              :
              "Hizmetler"
            }
          </h1>
          <h2>Vergiye dair her türlü sorununuzu uzmanlıkla çözüyor ve işinizi büyütüyoruz.</h2>
        </div>
      </div>
      <div className="contServ">
        <div className="cs1">
          <div className="cs1A">
            <ul>
              {services.map((item, index) => (
                <Link to={`${item.path}`} onClick={() => setSelectedService(item.id)} style={{ textDecoration: "none" }}><li key={index} className={item.id === selectedService && "activeService"}>{item.name}</li></Link>
              ))}
            </ul>
          </div>
          <div className="cs1B">
            <img src={callservice2} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık" />
            <h1>Detaylı Bilgi İçin Arayabilirsiniz</h1>
            <span><CallIcon /></span>
            <div className="pCont">
              <p className="p1">Sabit Hattımız</p>
              <p className="p2">0 506 313 31 37</p>
            </div>
          </div>
        </div>
        <div className="cs2">
          <div className="cs2A">
            {homeImages.map((image, index) => (
              <img
                key={index}
                className="homeImg"
                src={image.img}
                alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"
                style={{ opacity: index === currentState ? 0.7 : 0 }}
              />
            ))}
            <div className="hoverCt">
              <div className="hoverCont">
                <h1>M&C PARTNERS YEMİNLİ MALİ MÜŞAVİRLİK</h1>
              </div>
            </div>
            <div className="arrows">
              <button onClick={clickArrowLeft} className="left"><ArrowBackIosNewIcon /></button>
              <button onClick={clickArrowRight} className="right"><ArrowBackIosNewIcon /></button>
            </div>
          </div>
          <div className="cs2B">
            {serviceName
              ?
              services.filter((item) => item.path === serviceName)
                .map((macthedService) => macthedService.compDos)
              :
              <Dos1 />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage