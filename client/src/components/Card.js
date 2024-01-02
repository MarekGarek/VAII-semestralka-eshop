import img from '../images/c.jpg';

{/* <div className="grid-container3"> */}

export default function Card() {
  return (
    <div className="grid-cards">
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img card-img-top" src={img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Vitamín C</h5>
          <p className="card-text"> Skladom</p>
          <p className="card-text"> €2,99</p>
          <a className="btn btn-primary">Kúpiť</a>
        </div>
      </div>
    </div>
  );
}