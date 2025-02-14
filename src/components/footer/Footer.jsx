import "./footer.scss"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import logoWhite from "../../assets/mcpartners2.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="cont-1 mr">
                    <div className="header1">
                        <div className="logoCont">
                            <img className="logo" src={logoWhite} alt="Enka, enkaymm, Enka YMM, enka ymm, enka_ymm, enka_yeminli_mali_musavir, enes_karakurt, enka_mali, enka_denetim, enka_ymm_enes_karakurt, enkaymm_enes_karakurt, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi , kdv iade , danışmanlık"></img>
                        </div>
                    </div>
                    <div className="desc1">
                        <p>
                            M&C Partners Yeminli Mali Müşavirlik Anonim Şirketi profesyonel ekibi ile hızlı, dürüst, güvenilir ve yerinde hizmet sunarak müşteri ve paydaşlarına değer katmayı kendisine ilke edinen, sunmuş olduğu hizmetlerin kalitesinde kendisi ile yarışan, Dünya standartlarında Yeminli Mali Müşavirlik, Denetim, Danışmanlık ve Vergi Planlaması konularında hizmet vermeyi kendisine amaç edinmiş bir kuruluştur.
                        </p>
                    </div>
                </div>
                <div className="cont-11">
                    <div className="cont-2 mr br">
                        <h1 className="hd">Hızlı Erişim</h1>
                        <ul className="menu1 mn">
                            <Link className="link" to="/Anasayfa"><li>Anasayfa</li></Link>
                            <Link className="link" to="/Kurumsal"><li>Kurumsal</li></Link>
                            <Link className="link" to="/Hizmetler"><li>Hizmetlerimiz</li></Link>
                            <Link className="link" to="/Iletisim"><li>İletişim</li></Link>
                            <Link className="link" to="/Kariyer"><li>Kariyer</li></Link>
                        </ul>
                    </div>
                    <div className="cont-3 mr br">
                        <h1 className="hd">Hizmetlerimiz</h1>
                        <ul className="menu2 mn">
                            <Link className="link" to="/Hizmetler/tam-tasdik-hizmetleri"><li>Tam Tasdik Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/vergi-iadesi-hizmetleri"><li>Vergi İadesi Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/vergi-incelemesi-danismanligi-hizmetleri"><li>Vergi İncelemesi Danışmanlığı Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/izaha-davet-uygulamasi-danismanlik-hizmetleri"><li>İzaha Davet Uygulaması Danışmanlık Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/gonullu-uyum-danismanlik-hizmetleri"><li>Gönüllü Uyum Danışmanlığı Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/birlesme-bolunme-tur-degistirme-ve-devir-islemleri-yonetimi-hizmetleri"><li>Birleşme, Bölünme, Tür Değiştirme ve Devir İşlemleri Yönetimi Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/ozel-denetim-ic-denetim-ve-raporlama-hizmetleri"><li>Özel Denetim, İç Denetim ve Raporlama Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/muhasebe-sistemleri-kurulmasi-ve-surec-yonetimi-hizmetleri"><li>Muhasebe Sistemleri Kurulması ve Süreç Yönetimi Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/asgari-iscilik-uygulamasi-ve-raporlama-hizmetleri"><li>Asgari İşçilik Uygulaması ve Raporlama Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/vergi-planlamasi-hizmetleri"><li>Vergi Planlaması Hizmetleri</li></Link>
                            <Link className="link" to="/Hizmetler/diger-tasdik-ve-ozel-amacli-raporlama-hizmetleri"><li>Diğer Tasdik ve Özel Amaçlı Raporlama Hizmetleri</li></Link>
                        </ul>
                    </div>
                    <div className="cont-4 mr br">
                        <h1 className="hd">Bize Ulaşın</h1>
                        <ul className="menu3 mn">
                            <li>
                                <span><CallIcon /></span>
                                <div>
                                    <p>İletişim</p>
                                    <p>0540 099 66 66</p>
                                </div>
                            </li>
                            <li>
                                <span><EmailIcon /></span>
                                <div>
                                    <p>E-Mail Adresimiz</p>
                                    <p>Mehmet.ozturk@<br />mcpartners.com</p>
                                </div>
                            </li>
                            <li>
                                <span><LocationOnIcon /></span>
                                <div>
                                    <p>Ofis Adresimiz</p>
                                    <p>Mustafa Kemal Mahallesi 2131. Cadde Nurdağ Plaza No: 30/16 Çankaya/ANKARA</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="designer">
                <a href="https://www.linkedin.com/in/frkndrk/" target="_blank" style={{ textDecoration: "none" }}><p><CopyrightIcon fontSize="small" style={{ color: "#fff", marginRight: "5px" }} />Furkan Durak<LinkedInIcon fontSize="small" style={{ marginLeft: "5px" }} /></p></a>
            </div>
        </div>
    )
}

export default Footer