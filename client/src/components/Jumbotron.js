import logoImage from '../images/fazula.jpg';
import { useNavigate } from 'react-router-dom';

export default function Jumbotron() {
    const navigate = useNavigate();

    return (
        <div className="p-3 text-center bg-white border-bottom md">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                        <a className="ms-md-2" onClick={() => navigate('/')}>
                            <img src={logoImage} height="50" alt="Gym Bean" />
                            <em className="logo">Gym<em className="logo2">Bean</em></em>
                        </a>
                    </div>

                    <div className="col-md-4">
                        <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                            <input
                                autoComplete="off"
                                type="search"
                                className="form-control rounded"
                                placeholder="Search"
                            />
                            <span className="input-group-text border-0 d-none d-lg-flex">
                                <i className="fas fa-search"></i>
                            </span>
                        </form>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className="d-flex">
                            <a className="text-reset me-3" href="#">
                                <span><i className="bi bi-cart4"></i></span>
                            </a>

                            <div className="dropdown">
                                <a
                                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                                    onClick={() => navigate("login")}
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person-circle"></i>
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li><a className="dropdown-item" href="#">Prihlásiť</a></li>
                                    <li><a className="dropdown-item" href="#">Registrovať</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}