import RegisterComponent from '../components/RegisterComponent';
import '../css/css1.css';
import '../css/css2.css';
import '../css/css4.css';

export default function Register() {
    return (
        <>
            <h3>Registrácia</h3>
            <button class="button1" onClick={()=> window.location.replace('https://facebook.com')}><i class="bi bi-facebook"></i> Zaregistruj sa cez Facebook</button><br />
            <button class="button1" onClick={()=> window.location.replace('https://gmail.com')}><i class="bi bi-google"></i> Zaregistruj sa cez Gmail</button>
            
            <RegisterComponent/>
        </>
    )
}