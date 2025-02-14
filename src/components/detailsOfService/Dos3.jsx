import { useState } from "react";
import "./dos.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Dos3 = () => {

    const [state, setState] = useState(false)

    return (
        <div className='dos3 dos'>
            <h1><strong>Vergi İncelemesi</strong> Danışmanlığı Hizmetleri</h1>
            <h3>Vergi İncelemesi Nedir?</h3>
            <p>
                Vergi incelemesi, vergi idaresi tarafından mükelleflerin vergi beyannameleri, defter ve belgeleri üzerinde yapılan detaylı bir inceleme sürecidir. Bu süreç, mükelleflerin vergi kanunlarına uygun hareket edip etmediğini kontrol etmeyi ve vergi kayıplarını önlemeyi amaçlar. Vergi incelemesi, vergi mevzuatının doğru bir şekilde uygulanmasını sağlamak için önemli bir araçtır.
            </p>
            <h3>Vergi İncelemesi Yapmaya Kimler Yetkilidir?</h3>
            <p>
                213 sayılı Vergi Usul Kanunun 135. Maddesi; “Vergi incelemesi; Vergi Müfettişleri, Vergi Müfettiş Yardımcıları, ilin en büyük mal memuru veya vergi dairesi müdürleri tarafından yapılır. Gelir İdaresi Başkanlığının merkez ve taşra teşkilatında müdür kadrolarında görev yapanlar her hal ve takdirde vergi inceleme yetkisini haizdir.” Şeklindedir. İlgili madde de vergi incelemesine yetkili olanlar sayılmıştır.
            </p>
            <p>
                Bu kişiler, Hazine ve Maliye Bakanlığına bağlı olarak çalışır ve vergi incelemesi sürecini yürütürler. Vergi müfettişleri, genellikle daha karmaşık ve büyük ölçekli vergi incelemelerini gerçekleştirirler. İncelemelerin büyük çoğunluğu vergi müfettişleri tarafından gerçekleştirilir.
            </p>
            <h3>Vergi İncelemesine Alınma Sebepleri Nelerdir?</h3>
            <p>Vergi incelemesine alınma sebepleri çeşitlidir ve genellikle aşağıdaki durumlarda vergi idaresi inceleme sürecini başlatır:</p>
            <p><b>Rastgele Seçim:</b> Vergi idaresi, bazen rastgele seçim yöntemiyle mükellefleri incelemeye alabilir. Bu, herhangi bir şüphe olmaksızın yapılan bir inceleme türüdür.</p>
            <p><b>Beyanname Tutarsızlıkları:</b> Mükellefin verdiği beyannamelerde tutarsızlıklar veya eksiklikler tespit edilmesi durumunda inceleme başlatılabilir.</p>
            <p><b>Şikayet veya İhbar:</b> Üçüncü kişilerin şikayeti veya ihbarı üzerine vergi idaresi inceleme sürecini başlatabilir.</p>
            <p><b>Sektörel Analizler:</b> Belirli sektörlerde yapılan analizler sonucunda, o sektördeki mükellefler üzerinde inceleme yapılabilir.</p>
            <p><b>Önceki İncelemelerde Tespit Edilen Sorunlar:</b> Daha önce yapılan incelemelerde tespit edilen sorunlar veya eksiklikler, yeniden inceleme yapılmasına neden olabilir.</p>
            <h3>Vergi İncelemesinin Sonucunda Ne Olur?</h3>
            <p>Vergi incelemesi sonucunda, mükellefin vergi beyannameleri ve defterlerinde herhangi bir eksiklik veya yanlışlık tespit edilmezse, inceleme süreci sorunsuz bir şekilde sonuçlanır. Ancak, eksiklik veya yanlışlık tespit edilmesi durumunda, vergi idaresi tarafından vergi tarhı yapılır. Bu, mükellefin ödemesi gereken ek vergi, ceza ve gecikme faizini içerebilir. Mükellef, bu tarhiyata itiraz etme hakkına sahiptir ve itiraz süreci vergi mahkemelerinde devam edebilir.</p>
            <h3>Vergi İncelemesi Yapılırken Kimden Destek Alınır?</h3>
            <p>Vergi incelemesi sürecinde mükellefler, genellikle yeminli mali müşavirlerden destek alırlar. Yeminli mali müşavirler, vergi mevzuatına hakim olmaları ve inceleme sürecinde mükelleflerin haklarını korumaları açısından önemli bir rol oynarlar.</p>
            <h3>Yeminli Mali Müşavirden Destek Almanın Faydaları Nelerdir?</h3>
            <p>Yeminli mali müşavirlerden destek almanın birçok faydası bulunmaktadır:</p>
            <p><b>Vergi Mevzuatına Hakimiyet:</b> Yeminli mali müşavirler, vergi mevzuatına tam olarak hakimdirler ve bu bilgilerini inceleme sürecinde mükellefin lehine kullanırlar.</p>
            <p><b>Defter ve Belgelerin Kontrolü:</b> İnceleme öncesinde defter ve belgelerin kontrol edilmesi, olası hataların önceden tespit edilmesini sağlar.</p>
            <p><b>İnceleme Sürecinde Rehberlik:</b> Yeminli mali müşavirler, inceleme sürecinde mükellefe rehberlik ederek, sürecin daha sorunsuz bir şekilde ilerlemesini sağlarlar.</p>
            <p><b>İtiraz ve Uzlaşma Süreçlerinde Destek:</b> Vergi idaresi tarafından yapılan tarhiyata itiraz etmek veya uzlaşma sürecine girmek gibi durumlarda, yeminli mali müşavirler mükellefe hukuki ve mali destek sağlarlar.</p>
            <p><b>Zaman ve Maliyet Tasarrufu:</b> Yeminli mali müşavirlerin desteği, inceleme sürecinin daha hızlı ve verimli bir şekilde sonuçlanmasını sağlayarak, mükellefin zaman ve maliyet kaybını en aza indirir.</p>
            <p><b>Sonuç olarak;</b> vergi incelemesi, mükellefler için önemli bir süreçtir ve bu süreçte yeminli mali müşavirlerden destek almak, mükellefin haklarını koruması ve sürecin daha sorunsuz bir şekilde ilerlemesi açısından büyük önem taşır. Vergi incelemesi sürecinde profesyonel destek almak, olası riskleri en aza indirmek için kritik bir adımdır. Mükelleflerin bu süreçte destek almaları vergi uyuşmazlıklarını önlemek açısından büyük önem taşır.</p>
            <p>M&C Partners ekibi tarafından vergi incelemesi danışmanlığı hizmeti verilmektedir. Vergi İncelemesi Danışmanlığı süreciyle ilgili detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>






            <div className={state ? "outCont active" : "outCont"}>
                <div style={{ visibility: `${state ? "visible" : "hidden"}` }} className="hiddenCont">
                    <h2>Vergi Uyuşmazlıkları Hizmetimiz</h2>
                    <ul>
                        <li>Vergi incelemeleri sırasında mükellef ile birlikte hareket etmek, her türlü bilgi, belge ve dökümlerin hazırlanması desteğini sunmak</li>
                        <li>İncelemeye ilişkin işe başlama tutanağından nihai tutanağın alınması ve nihayetinde uzlaşma süreci sonuna kadar stratejik her türlü konularda mükellefleri yönlendirmek, bilgilendirmek, yol haritaları hazırlamak</li>
                        <li>Mükelleflerin hak ve hukuklarını gözetecek her türlü önlem ve tedbirleri almak</li>
                        <li>İfadelerin mükelleflerin geleceğine dair oluşturabileceği risklerin ortadan kaldırılmasına dair danışmanlık hizmetlerini titizlikle yürütmek</li>
                        <li>Tutanakların gözden geçirilmesi</li>
                        <li>Vergi incelemeleri sonrasında bulguların analizi</li>
                        <li>Uzlaşma veya dava açma kararının alınabilmesine yardımcı olacak teknik değerlendirme raporu</li>
                        <li>Tarhiyat öncesi veya sonrası uzlaşma kararının alınması</li>
                        <li>Uzlaşmalara fiilen katılmak, en iyi sonuçla uzlaşma sağlamak için destek sunmak</li>
                        <li>Dava konusu edilen konularda, dava dilekçelerine esas argümanların belirlenmesi</li>
                        <li>Şirket verilerinden hareketle dilekçe eklerinin, dilekçede kullanılabilecek rakamsal çalışmalar yapılarak, mahkemede teknik hususların izahını yapmak</li>
                        <li>İhtiyaç duyulan konularda (Resmi Kurumlara sunmak için) görüş hazırlamak ve sunmak</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dos3