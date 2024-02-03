import '../css/blogEdit.css';
import { useState, useEffect, useContext } from 'react';
import {useLocation} from'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import AuthContext from '../AuthProvider'
import { useNavigate } from 'react-router-dom';


export default function BlogEdit() {
    const {auth} = useContext(AuthContext);
    const navigate = useNavigate();
    //získanie parametra z URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const encoded = searchParams.get('id');
    //dekodovanie parametra 
    const encodedJsonItem = decodeURIComponent(encoded);
    const item = JSON.parse(encodedJsonItem);
    
    let dbTitle, dbText, dbImg, dbNumber, dbBlogType;

    if (item !== null) {
        dbTitle = item.title;
        dbText = item.text;
        dbImg = item.img;
        dbNumber = item.read_time;
        dbBlogType = item.blog_type;
    } else {
        dbTitle = '';
        dbText = '';
        dbImg = '';
        dbNumber = '';
        dbBlogType = '';
    }

    let [title, setTitle] = useState(() => { return dbTitle});
    let [text, setText] = useState(() => { return dbText});
    let [number, setNumber] = useState(() => { return dbNumber});
    let [blogType, setBlogType] = useState(() => { return dbBlogType});
    let [formMessage, setFormMessage] = useState('');
    let [img, setImg] = useState(() => { return dbImg});
    let [image, setImage] = useState(null);

    let data = {
        title: title,
        text: text,
        read_time: number,
        blog_type: blogType,
    }

    const postData = async () => {
        try {
            const formData = new FormData();
            formData.append('blogImg', img);
            formData.append('login', auth.login)
            for (let key in data) {
                formData.append(key, data[key]);
            }
            const response = await axios.post('http://localhost:4000/post/data', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            setFormMessage(<p className="formCheck"> {response.formData} </p>);
            navigate('/blog');
          } catch (error) {
            console.error(error);
            setFormMessage(<p className="formError">Chyba pri odosielaní dát</p>);
          }
    };

    const putData = async () => {
        const formData = new FormData();
        formData.append('blogImg', img);
        for (let key in data) {
            formData.append(key, data[key]);
        }
        formData.append('id_blog', item.id_blog);
        try {
            const response = await axios.put('http://localhost:4000/put/data', formData);
            setFormMessage(<p className="formCheck"> {response.formData} </p>);
            navigate('/blog');
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

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setImage(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        } else {
          setImage(null);
        }
      };

    const handleChange = (event) => {
        setImg(event.target.files[0]);
        handleImageUpload(event);
      };

    const options = [dbBlogType, "Fitness recepty", "Výživové doplnky", "Strava a zdravý životný štýl", "Cviky a tréningy"].filter((value, index, self) => self.indexOf(value) === index);

    return (
        <div>

            <form className="grid-container" onSubmit={handleSubmit}>
                <div className="title">
                    <label for="text">Názov</label>
                    <input type="text" placeholder="Názov" required minLength={5} maxLength={150} 
                        value={title} onChange={(e) => setTitle(DOMPurify.sanitize(e.target.value))}/>
                </div>
                <br></br>

                <div className="text">
                    <label for="text">Text:</label>
                    <textarea id="text" name="text" rows="4" cols="50" placeholder="Zadejte text..." required maxLength={5000}
                        value={text} onChange={(e) => setText(DOMPurify.sanitize(e.target.value))} ></textarea>
                </div>
                <br></br>

                <div className="upload">
                    <form encType="multipart/form-data">
                        <label for="text">Nahraj obrázok:</label>
                        <input type="file" name="blogImg" onChange={handleChange}></input>
                        {image ? <img className="editPicture" src={image}/> : <img className="editPicture" src={`data:image/png;base64,${img}`}/>}
                    </form>
                </div>
                <br></br>  
                
                <div className="readTime">
                    <label for="readTime">Čas čítania:</label>
                    <input type="number" min="1" max="60" step="1" required
                        value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <br></br>
                
                <div className="blogType">
                    <label for="blogType">Zaradenie:</label>
                    <select value={blogType} onChange={(e) => setBlogType(e.target.value)}>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <br></br>

                <div className="submit-btn">
                    <button type="submit">Odoslať</button>
                </div>
            </form>

        {formMessage}

        </div>
    )
}