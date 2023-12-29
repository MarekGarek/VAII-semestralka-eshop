import LoginComponent from '../components/LoginComponent';
import '../css/css1.css';
import '../css/css2.css';
import '../css/css4.css';

export default function Login() {
    return (
        <>
            <h3>Registrácia</h3>
            <button class="button1" onClick={()=> window.location.replace('https://facebook.com')}><i class="bi bi-facebook"></i>Prihlásiť sa cez Facebook</button><br />
            <button class="button1" onClick={()=> window.location.replace('https://gmail.com')}><i class="bi bi-google"></i>Prihlásiť sa cez Gmail</button>
            
            <LoginComponent/>
        </>
    )
}