import { useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./dos.scss"

const Dos6 = () => {
    const [state, setState] = useState(false)

    return (
        <div className='dos6 dos'>
            <h1><strong>Birleşme</strong>, <strong>Bölünme</strong>, <strong>Tür Değiştirme</strong> ve <strong>Devir</strong> İşlemleri Yönetimi Hizmetleri</h1>
            <p>Türk vergi sisteminde birleşme, bölünme, tür değiştirme ve devir işlemleri, şirketlerin yapısal değişikliklerine ilişkin hukuki ve mali süreçleri kapsar. Bu işlemler, Türk Ticaret Kanunu (TTK), Vergi Usul Kanunu (VUK) ve Kurumlar Vergisi Kanunu (KVK) gibi mevzuatlar çerçevesinde düzenlenir. İşte bu süreçlerin genel hatları:</p>
            <h3>1. Birleşme (Merger)</h3>
            <p>Birleşme, iki veya daha fazla şirketin tek bir şirket haline gelmesidir. Birleşme, ya yeni bir şirket kurularak (yeni kuruluş yoluyla birleşme) ya da mevcut bir şirketin diğer şirketleri bünyesine alması (devralma yoluyla birleşme) şeklinde gerçekleşir.</p>
            <h3>Süreç:</h3>
            <ul>
                <li>Birleşme sözleşmesinin hazırlanması ve noter onayı.</li>
                <li>Şirketlerin genel kurullarında birleşme kararının alınması.</li>
                <li>Ticaret Siciline ve Vergi Dairesine bildirim.</li>
                <li>Birleşmenin Türk Ticaret Kanunu ve Vergi Usul Kanunu’na uygunluğunun denetlenmesi.</li>
                <li>Birleşme sonrası vergi yükümlülüklerinin devri ve beyannamelerin sunulması.</li>
            </ul>
            <p><b>Vergisel Etkiler:</b></p>
            <p>Birleşme işlemi, KVK’ya göre vergi avantajlarından yararlanabilir (örneğin, birleşme kârının vergilendirilmemesi). Katma Değer Vergisi (KDV) ve Damga Vergisi gibi dolaylı vergilerin muafiyetleri söz konusu olabilir.</p>
            <h3>2. Bölünme (Spin-off)</h3>
            <p>Bölünme, bir şirketin iki veya daha fazla şirkete ayrılmasıdır. Bölünme, ya mevcut şirketin varlıklarının yeni şirketlere paylaştırılması (kısmi bölünme) ya da şirketin tamamen feshedilerek varlıklarının yeni şirketlere aktarılması (tam bölünme) şeklinde gerçekleşir.</p>
            <h3>Süreç:</h3>
            <ul>
                <li>Bölünme planının hazırlanması ve noter onayı.</li>
                <li>Genel kurul kararı alınması.</li>
                <li>Ticaret Sicili ve Vergi Dairesine bildirim.</li>
                <li>Bölünme işleminin TTK ve VUK’a uygunluğunun denetlenmesi.</li>
                <li>Bölünme sonrası vergi yükümlülüklerinin paylaştırılması.</li>
            </ul>
            <p><b>Vergisel Etkiler:</b></p>
            <p>Bölünme işlemi, KVK’ya göre vergi avantajları sağlayabilir (örneğin, bölünme kârının vergilendirilmemesi). KDV ve Damga Vergisi muafiyetleri uygulanabilir.</p>
            <h3>3. Tür Değiştirme (Conversion)</h3>
            <p>Tür değiştirme, bir şirketin hukuki yapısını değiştirmesidir (örneğin, limited şirketten anonim şirkete dönüşüm).</p>
            <h3>Süreç:</h3>
            <ul>
                <li>Tür değiştirme kararının genel kurulda alınması.</li>
                <li>Tür değiştirme sözleşmesinin hazırlanması ve noter onayı.</li>
                <li>Ticaret Sicili ve Vergi Dairesine bildirim.</li>
                <li>Tür değiştirme işleminin TTK ve VUK’a uygunluğunun denetlenmesi.</li>
            </ul>
            <p><b>Vergisel Etkiler:</b></p>
            <p>Tür değiştirme işlemi, genellikle vergiye tabi değildir. Ancak, şirketin varlıklarında değer artışı varsa, bu artış vergilendirilebilir.</p>
            <h3>4. Devir (Transfer)</h3>
            <p>Devir, bir şirketin malvarlığının veya işletmesinin başka bir şirkete aktarılmasıdır. Bu işlem, birleşme veya bölünme kapsamında olabileceği gibi, bağımsız bir işlem olarak da gerçekleşebilir.</p>
            <h3>Süreç:</h3>
            <ul>
                <li>Devir sözleşmesinin hazırlanması ve noter onayı.</li>
                <li>Genel kurul kararı alınması.</li>
                <li>Ticaret Sicili ve Vergi Dairesine bildirim.</li>
                <li>Devir işleminin TTK ve VUK’a uygunluğunun denetlenmesi.</li>
            </ul>
            <p><b>Vergisel Etkiler:</b></p>
            <p>Devir işlemi, KVK’ya göre vergilendirilebilir (örneğin, devir kârı üzerinden kurumlar vergisi). KDV ve Damga Vergisi muafiyetleri söz konusu olabilir.</p>
            <p><b>Genel Vergisel Düzenlemeler:</b></p>
            <p><b>Vergi Avantajları:</b> Birleşme, bölünme ve devir işlemlerinde, KVK’nın 18. maddesi uyarınca, belirli şartlar sağlandığında vergi avantajlarından yararlanılabilir.</p>
            <p><b>Beyan Yükümlülükleri:</b> İşlemlerin vergi dairelerine bildirilmesi ve gerekli beyannamelerin sunulması zorunludur.</p>
            <p><b>Muafiyetler:</b> KDV ve Damga Vergisi gibi dolaylı vergilerde muafiyetler uygulanabilir, ancak bu durum işlemin niteliğine ve mevzuata uygunluğuna bağlıdır.</p>
            <p><b>Sonuç olarak;</b> Türk vergi sisteminde birleşme, bölünme, tür değiştirme ve devir işlemleri, hem hukuki hem de mali açıdan karmaşık süreçlerdir. Bu işlemlerin başarılı bir şekilde yönetilebilmesi için, ilgili mevzuatın dikkatlice incelenmesi ve uzman danışmanlardan destek alınması önemlidir.</p>
            <p>M&C Partners ekibi olarak bu kapsamda ihtiyacı olan mükelleflere süreç danışmanlığı hizmeti verilmektedir. Bu hizmetler hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
        </div>
    )
}

export default Dos6