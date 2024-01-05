export default function Card({name, pieces, price, img}) {
  return (
    <div className="grid-cards">
      <div className="card" style={{ width: '20rem' }}>
        <img className="card-img card-img-top img-product" src={`data:image/png;base64,${img}`} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div>
          { pieces !== 0 ? <p className="card-text green"> Skladom</p> : <p className="card-text red"> Nie je skladom</p> }
          </div>
          <p className="card-text"> €{price}</p> <br/>
          <a className="btn btn-primary">Kúpiť</a>
        </div>
      </div>
    </div>
  );
}