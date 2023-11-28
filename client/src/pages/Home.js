import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../css/css1.css';
import '../css/css2.css';

export default function Home() {
    return (
        <>
        <Carousel/>
        <div class="grid-container1">
            <div class="grid-item1"><i class="bi bi-bag-heart-fill"> 20M+ <em class="odsek-text">spokojných zákazníkov &nbsp;&nbsp;</em></i></div>
            <div class="grid-item1"><i class="bi bi-hourglass-split"> 24 hodín <em class="odsek-text">rýchle dodanie &nbsp;&nbsp;</em></i></div>
            <div class="grid-item1"><i class="bi bi-truck">doprava zadarmo <em class="odsek-text">pri nákupe nad 20e &nbsp;&nbsp;</em></i></div>
            <div class="grid-item1"><i class="bi bi-bag-fill">10 000+ <em class="odsek-text">produktov </em></i></div>
        </div>
        <p class="mininadpis">Objavte overené produkty podľa vášho cieľa. Chcete: </p>
        </>
    )
}