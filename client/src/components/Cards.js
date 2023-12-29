import img from '../images/c.jpg';

export default function Cards() {
  return (
    <div className="grid-cards">
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img card-img-top" src={img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Podporiť imunitu</h5>
          <p className="card-text">
            Na podporu imunity je kategória produktov, ktoré vám pomôžu doplniť kľúčové látky pre podporu imunity a obranyschopnosťi organizmu....
          </p>
          <a className="btn btn-primary">Viac...</a>
        </div>
      </div>
    </div>
  );
}
