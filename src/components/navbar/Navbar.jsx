import { useState } from "react"
import "./navbar.scss"
import CallIcon from '@mui/icons-material/Call'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import logoWhite from "../../assets/4.png"

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollNum = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", scrollNum)


  return (
    <div className={navbar || menuOpen ? "navbar active" : "navbar"} style={{ position: navbar && "fixed", top: navbar && "0" }}>
      <div className="cont1">
        <div className="logoCont">
          <Link to="/Anasayfa"><img className="logo" src={navbar ? `${logoWhite}` : `${logoWhite}`} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"></img></Link>
        </div>
        <div className="menu">
          <ul className="menuUl">
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link className="link" to="/Anasayfa">Anasayfa</Link></li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link className="link" to="/Kurumsal">Kurumsal</Link><KeyboardArrowDownIcon />
              <ul className="subMenuCont">
                <li className="subMenu"><Link className="link" to="/Kurumsal">Hakkımızda</Link></li>
                <li style={{ margin: "10px 20px", color: "rgba(28, 65, 119, 0.8)" }}><Link className="link" to="/Ortaklarimiz">Yönetim Kurulu Başkanımız</Link></li>
              </ul>
            </li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link className="link" to="/Hizmetler">Hizmetlerimiz</Link><KeyboardArrowDownIcon />
              <ul className="subMenuCont">
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/tam-tasdik-hizmetleri">Tam Tasdik Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/vergi-iadesi-hizmetleri">Vergi İadesi Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/vergi-incelemesi-danismanligi-hizmetleri">Vergi İncelemesi Danışmanlığı Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/izaha-davet-uygulamasi-danismanlik-hizmetleri">İzaha Davet Uygulaması Danışmanlık Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/gonullu-uyum-danismanlik-hizmetleri">Gönüllü Uyum Danışmanlık Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/birlesme-bolunme-tur-degistirme-ve-devir-islemleri-yonetimi-hizmetleri">Birleşme, Bölünme, Tür Değiştirme ve Devir İşlemleri Yönetimi Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/ozel-denetim-ic-denetim-ve-raporlama-hizmetleri">Özel Denetim, İç Denetim ve Raporlama Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/muhasebe-sistemleri-kurulmasi-ve-surec-yonetimi-hizmetleri">Muhasebe Sistemleri Kurulması ve Süreç Yönetimi  Hizmetleri</Link>
                </li>
                <li className="subMenu">
                  <Link className="link" to="/Hizmetler/asgari-iscilik-uygulamasi-ve-raporlama-hizmetleri">Asgari İşçilik Uygulaması ve Raporlama Hizmetleri</Link>
                </li>
                <li className="subMenu linkBottom">
                  <Link className="link" to="/Hizmetler/vergi-planlamasi-hizmetleri">Vergi Planlaması Hizmetleri</Link>
                </li>
                <li className="subMenu linkBottom">
                  <Link className="link" to="/Hizmetler/diger-tasdik-ve-ozel-amacli-raporlama-hizmetleri">Diğer Tasdik ve Özel Amaçlı Raporlama Hizmetleri</Link>
                </li>
              </ul>
            </li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link className="link" to="/Iletisim">İletişim</Link></li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link className="link" to="/Kariyer">Kariyer</Link></li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li><CallIcon style={{ backgroundColor: "#fff", color: "rgb(28, 65, 119)", borderRadius: "50%", padding: "10px" }} /></li>
            <li>
              <p className={navbar && "fontColor"}>İletişim</p>
              <p className={navbar && "fontColor"}>0540 099 66 66</p>
            </li>
          </ul>
        </div>
        <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
          <ul className="hambList">
            <span className={navbar ? "hamb bgColor" : "hamb"}></span>
            <span className={navbar ? "hamb bgColor" : "hamb"}></span>
            <span className={navbar ? "hamb bgColor" : "hamb"}></span>
          </ul>
        </div>
        <div className={"menuListList " + (menuOpen && "active")} id="menuList" style={{ top: navbar && "70px", height: "calc(100vh - 70px)" }}>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Anasayfa">Anasayfa</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Kurumsal">Kurumsal</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Ortaklarimiz">Yönetim Kurulu Başkanımız</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Hizmetler">Hizmetlerimiz</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Iletisim">İletişim</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Kariyer">Kariyer</Link></li>
            <div className="logoCont2">
              <Link to="/Anasayfa"><img className="logo" src={logoWhite} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"></img></Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar