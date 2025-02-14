import "./dos.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

const Dos5 = () => {

    const [state, setState] = useState(false)
    return (
        <div className='dos5 dos'>
            <h1><strong>Gönüllü Uyum</strong> Danışmanlık Hizmeti</h1>
            <p>Gelir İdaresi Başkanlığı tarafından mükelleflerin vergiye gönüllü uyumunu sağlamak, mükellef haklarını gözetmek, mükelleflerin yükümlülüklerini kolayca yerine getirmek amacıyla çalışmalar yapılmakta olup veriye dayalı analiz çalışmaları sonucunda mükelleflerin vergisel ödevleri ile ilgili olarak ortaya çıkabilecek olumsuzlukların en kısa sürede önlenmesi amacıyla, sektörel ve konu bazlı denetim çalışmaları yapılmaktadır.</p>
            <p>Belirlenen bu ilkeler doğrultusunda, Gelir İdaresi Başkanlığı tarafından veri ambarında bulunan mevcut veriler analize tabi tutularak konu ve sektörlere yönelik çalışmalar yapılıp, bu kapsamda mükellefler vergi idarelerinde bulunan Denetim Koordinasyon Müdürlüklerinde görüşmeye çağırılmaktadır.</p>
            <p>M&C Partners ekibi tarafından bu kapsamda çağırılan mükelleflere danışmanlık hizmeti verilmektedir.</p>
            <p>Gönüllü Uyum Danışmanlık Hizmetleri hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
        </div>
    )
}

export default Dos5