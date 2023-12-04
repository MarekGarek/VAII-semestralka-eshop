import '../css/blogEdit.css';
import { useState } from 'react';

export default function BlogEdit() {
    let [title, setTitle] = useState('');
    let [text, setText] = useState('');
    let [url, setUrl] = useState('');
    let [number, setNumber] = useState('');
    let [blogType, setBlogType] = useState('');

    const cleanInputs = () => {
        title = title.replace(/<script>|<\/script>/gi, '');
        text = text.replace(/<script>|<\/script>/gi, '');
        url = url.replace(/<script>|<\/script>/gi, '');

        title = title.replace(/<\?php/g, '');
        text = text.replace(/<\?php/g, '');
        url = url.replace(/<\?php/g, '');
    };

    const handleSubmit = (e) => {
        cleanInputs();
        e.preventDefault();
        console.log(title);
        console.log(text);
        console.log(url);
        console.log(number);
        console.log(blogType);
    };


    return (
        <div>

            <form className="grid-container" onSubmit={handleSubmit}>
                <div className="title">
                    <label for="text">Názov</label>
                    <input type="text" placeholder="Názov" required minLength={5} maxLength={150} 
                        value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <br></br>

                <div className="text">
                    <label for="text">Text:</label>
                    <textarea id="text" name="text" rows="4" cols="50" placeholder="Zadejte text..." required maxLength={5000}
                        value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                </div>
                <br></br>

                <div className="upload">
                    <label for="text">Zadaj url obrázka:</label>
                    <input type="url" placeholder="https://" required maxLength={200}
                        value={url} onChange={(e) => setUrl(e.target.value)}></input>
                </div>
                <br></br>  
                
                <div className="readTime">
                    <input type="number" min="1" max="60" step="1" required
                        value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <br></br>
                
                <div className="blogType">
                    <select onChange={(e) => setBlogType(e.target.value)}>
                        <option value="Fitness recepty">Fitness recepty</option>
                        <option value="Výživové doplnky">Výživové doplnky</option>
                        <option value="Strava a zdravý životný štýl">Strava a zdravý životný štýl</option>
                        <option value="Cviky a tréningy">Cviky a tréningy</option>
                    </select>
                </div>
                <br></br>

                <div className="submit-btn">
                    <button type="submit">Odoslať</button>
                </div>
            </form>

        </div>
    )
}