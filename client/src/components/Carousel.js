import ca1 from '../images/ca1.jpg';
import ca2 from '../images/ca2.jpeg';
import ca3 from '../images/ca3.jpg';

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={ca1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
            <img src={ca2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
            <img src={ca3} className="d-block w-100" alt="Slide 3" />
        </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}