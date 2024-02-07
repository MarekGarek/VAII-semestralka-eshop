import { useState, useEffect, useContext } from 'react';
import {useLocation} from'react-router-dom';
import axios from 'axios';
import AuthContext from '../AuthProvider'
import { useNavigate } from 'react-router-dom';

export default function ReciewsEdit(){
    const {auth} = useContext(AuthContext);
    const navigate = useNavigate();

    //získanie parametra z URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const encoded = searchParams.get('id');
    //dekodovanie parametra 
    const encodedJsonItem = decodeURIComponent(encoded);
    const item = JSON.parse(encodedJsonItem);

    let [title, setTitle] = useState(() => { return item ? item.title : ""});
    let [text, setText] = useState(() => { return item ? item.text : ""});
    let [stars, setStars] = useState(() => { return item ? item.stars : ""});
    let [recommendation, setRecommendation] = useState(() => { return item ? (item.recommendation == 1 ? true : false) : false});
    let [formMessage, setFormMessage] = useState('');

    const postData = async () => {
        try {
            const response = await axios.post('http://localhost:4000/post/review', 
            {
                title: title,
                text: text,
                stars: stars,
                login: auth.login,
                recommendation: (recommendation ? 1 : 0),
            });
            setFormMessage(<p className="formCheck"> {response.formData} </p>);
            navigate('/reviews');
          } catch (error) {
            console.error(error);
            setFormMessage(<p className="formError">Chyba pri odosielaní dát</p>);
          }
    };

    const putData = async () => {
        try {
            const response = await axios.put('http://localhost:4000/put/review', 
            {
                title: title,
                text: text,
                stars: stars,
                idreview: item.idreviews,
                recommendation: (recommendation ? 1 : 0),
            });
            setFormMessage(<p className="formCheck"> {response.formData} </p>);
            navigate('/reviews');
          } catch (error) {
            console.error(error);
            setFormMessage(<p className="formError">Chyba pri odosielaní dát PUT</p>);
          }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormMessage('');
        if (item === null) {
            postData();
        } else {
            putData();
        }
    };


    return(
        <>
        <br/><br/>
        <div className="grid-reviews greenBG">
            <div className="review">
                <label>Hodnotenie od 1 -{">"} 10 (najlepšie)</label><br/>
                <input type="number" min="1" max="10" style={{width: '75px'}} value={stars}
                       onChange={(e) => setStars(e.target.value)}></input>
            </div>

            <div className="editik">
            </div>

            <div className="header">
                <label style={{fontWeight: 'normal'}}>Nadpis:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="comment">
                <lavel>Recenzia:</lavel>
                <textarea id="text" name="text" rows="4" cols="50" placeholder="Zadejte text..." required maxLength={5000} value={text}
                          onChange={(e) => setText(e.target.value)}></textarea>
            </div>  
            <div className="bool greenBG">
                <label>Odporúčate našu stránku?</label>
                <input type="checkbox" className="review-checkbox" style={{width: '60px'}} checked={recommendation}
                       onChange={(e) => setRecommendation(e.target.checked)}></input>
            </div>
            <div className="date greenBG" style={{paddingBottom: '0px', paddingTop: '4px'}}>
                <button className="submit" style={{backgroundColor: '#52ba56'}} onClick={handleSubmit}>Odoslať</button>
            </div>
        </div>
        <br/><br/>
        </>
    )
}