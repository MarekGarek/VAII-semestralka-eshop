import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import logoImage from '../images/fazula.png';
import AuthContext from '../AuthProvider'
import axios from 'axios';

{/* bootstrap component mierne upraveny*/}

export default function Login() {
    const navigate = useNavigate();

    const {auth, setAuth} = useContext(AuthContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [isLoged, setIsLoged] = useState(false);

    const [isAdminos, setIsAdminos] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/post/auth', {login: login, password: password}, { withCredentials: true});
            const isAdmin = response?.data;
            if (response?.data) {
                setIsLoged(true);
                setIsAdminos(isAdmin);
            }
            setAuth({login, password, isAdmin, isLoged: true});
            setLogin('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            setErrMsg(err.response?.data?.message);
        }
    }

    useEffect(() => {
        if (auth.isLoged) {
            setIsLoged(true);
        }
        console.log(auth);
    }, [auth]);

    return (
        <>
        {auth.isLoged ?
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card text-white" style={{ borderRadius: '1rem', backgroundColor: '#4CAF50'}}>
                <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2 text-uppercase">Úspešne si sa prihlásil !</h2>

                        <p>{isAdminos === 'Y' ? 'Máš admin práva!' : '' }</p>

                        <br /><br />
                        <img src={logoImage} height="100" alt="Gym Bean" />
                        <br /><br />
                        
                        <div>
                            <p className="mb-0" style={{fontSize: 'large'}}> Prejdi na
                                <a role="button" onClick={() => {navigate("/home")}} className="text-black-50 fw-bold">úvodnú stránku</a>
                            </p>
                            <br></br>
                            <p className="mb-0" style={{fontSize: 'large'}}> alebo
                                <a role="button" onClick={() => setAuth({login: '', password: '', isAdmin: '', isLoged: false})} className="text-black-50 fw-bold">odhlásiť sa</a>
                            </p>
                        </div>
                   
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
        : 
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-white" style={{ borderRadius: '1rem', backgroundColor: '#4CAF50'}}>
                    <div className="card-body p-5 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Prihlásiť sa</h2>
                        <p className="text-black-50 mb-5 fw-bold">Zadajte svoje prihlasovacie meno a heslo!</p>

                        { errMsg ? <p style={{ borderRadius: '0.3rem', padding: '1px', backgroundColor: 'IndianRed', fontSize: 'medium'}}> {errMsg} </p> : <p></p>}

                        <div className="form-outline form-white mb-4">
                            <input type="text"
                                   id="typeEmailX" 
                                   className="form-control form-control-lg" 
                                   onChange={(e) => setLogin(e.target.value)}
                                   value={login}
                                   required
                            />
                            <label className="form-label" htmlFor="typeEmailX">Login</label>
                        </div>

                        <div className="form-outline form-white mb-4">
                            <input type="password" 
                                   id="typePasswordX" 
                                   className="form-control form-control-lg" 
                                   onChange={(e) => setPassword(e.target.value)}
                                   value={password}
                                   required
                            />
                            <label className="form-label" htmlFor="typePasswordX">Heslo</label>
                        </div>

                        <button className="btn btn-outline-light btn-lg px-5" 
                                type="submit"
                                onClick= {handleSubmit}> Prihlásiť
                        </button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white"><i className="bi bi-facebook"> &nbsp;&nbsp; </i></a>
                            <a href="#!" className="text-white"><i className="bi bi-twitter"> &nbsp;&nbsp; </i></a>
                            <a href="#!" className="text-white"><i className="bi bi-google"> &nbsp;&nbsp; </i></a>
                        </div>

                        </div>

                        <div>
                            <p className="mb-0"> Nemáš účet ? 
                                <a role="button" onClick={() => navigate("/register")} className="text-black-50 fw-bold">Zaregistruj sa!</a>
                            </p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        }
        </>
    )
}