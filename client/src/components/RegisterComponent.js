import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import '../css/css1.css'
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/fazula.png';

const LOGIN_REGEX = /^[a-zA-Z][a-zA-Z0-9]{4,20}$/;              // [zacina] [obsahuje] {rozsah/dlzka}
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,20}$/; // musí obsahovať jedno male,velke pismeno a cislo

export default function RegisterComponent() {
    const navigate = useNavigate();
    const loginRef = useRef();

    const [formMessage, setFormMessage] = useState('');

    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [email, setEmail] = useState('');

    const [login, setLogin] = useState('');
    const [validLogin, setValidLogin] = useState(false);
    
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    
    const [pwd2, setPwd2] = useState('');
    const [validPwd2, setValidPwd2] = useState(false);


    //skontrolujem ci login obsahuje vsetky znaky ktore ma podla regexu
    useEffect(() => {
        const result = LOGIN_REGEX.test(login);
        setValidLogin(result);
    },[login])

    //to iste s heslami
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === pwd2;
        setValidPwd2(match);
    },[pwd, pwd2])

    let data = {
        name: name,
        surName: surName,
        email: email,
        login: login,
        password: pwd
    }

    const [succ, setSucc] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/post/register', data);
            if (response.status === 200 && response.data.success) {
                setFormMessage(<p className="green">{response.data.message}</p>);
                setSucc(true);
              }
        } catch (error) {
            console.error('Chyba zo servera:', error.response);
            const serverMessage = error.response?.data?.message || 'Chyba pri odosielaní dát';
            setFormMessage(<p className="red">{serverMessage}</p>);
          }
    }
    
    return (
        
        <div>
        {succ ? <div>
                    <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card text-white" style={{ borderRadius: '1rem', backgroundColor: '#4CAF50'}}>
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">Úspešne si sa zaregistroval !</h2>
                                            <br /><br />
                                            <img src={logoImage} height="100" alt="Gym Bean" />
                                            <br /><br />
                                            <div>
                                                <p className="mb-0" style={{fontSize: 'large'}}> Tu sa môžeš
                                                    <a role="button" onClick={() => {navigate("/login")}} className="text-black-50 fw-bold">prihlásiť !</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        : 
        <div>
        <h3>Registrácia</h3>
        <button className="button1" onClick={()=> window.location.replace('https://facebook.com')}><i className="bi bi-facebook"></i> Zaregistruj sa cez Facebook</button><br />
        <button className="button1" onClick={()=> window.location.replace('https://gmail.com')}><i className="bi bi-google"></i> Zaregistruj sa cez Gmail</button>
        

        <div className="grid-container-r">
            <div className="item1-r">
                <form>
                    <label>Email</label>
                    <input type="email"
                           onChange={(e)=>{setEmail(e.target.value)}}/>
                    
                    <label >Meno</label>
                    <input type="text"
                           onChange={(e)=>{setName(e.target.value)}}/>
                    
                    <label >Priezvisko</label>
                    <input type="text"
                           onChange={(e)=>{setSurName(e.target.value)}}/>
                </form>
            </div>
            <div className="item2-r">
                <form>
                    <label>Login {!validLogin ? <i className="bi bi-x-lg red"></i> : <i className="bi bi-check2 green"></i>}</label>
                    <input type="text" 
                           ref={loginRef}
                           autoComplete="off"
                           required
                           onChange={(e) => setLogin(e.target.value)}
                    />       
                    <label>Heslo {!validPwd ? <i className="bi bi-x-lg red"></i> : <i className="bi bi-check2 green"></i>}</label>
                    <input type="password" 
                           required
                           onChange={(e) => setPwd(e.target.value)}
                    />

                    <label>Potvrdiť heslo {!validPwd || !validPwd2 ? <i className="bi bi-x-lg red"></i> : <i className="bi bi-check2 green"></i>}</label>
                    <input type="password"
                           required
                           onChange={(e) => setPwd2(e.target.value)}
                    />

                    {!validPwd || !validPwd2 || !validLogin ? <p><i className="bi bi-x-lg red"></i>Povinné polia</p> : <p></p>}
                    
                </form>
            </div>
            <div className="item3-r">
                <div className="newsDiv"> 
                    <label> Prihlásiť sa na odber noviniek </label> 
                    <input type="checkbox" className="newsCheckBox" />
                </div>

                <button type="submit" 
                        disabled={!validLogin || !validPwd || !validPwd2 ? true : false} 
                        onClick={handleSubmit}> 
                        REGISTRÁCIA
                </button>
                
                {formMessage}

            </div>
            <div className="item5-r">Osobné údaje</div>
            <div className="item6-r">Prihlasovacie údaje</div>
        </div>
        </div>
        }
        </div>
    );
}