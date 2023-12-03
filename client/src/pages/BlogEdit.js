import '../css/blogEdit.css';

export default function BlogEdit() {
    return (
        <div>

            <form className="grid-container">
                <div className="title">
                    <label for="text">Názov</label>
                    <input type="text" placeholder="Názov"  required/>
                </div>
                <br></br>

                <div className="text">
                    <label for="text">Text:</label>
                    <textarea id="text" name="text" rows="4" cols="50" placeholder="Zadejte text..."></textarea>
                </div>
                <br></br>

                <div className="upload">
                    <label for="text">Zadaj url obrázka:</label>
                    <input type="url" placeholder="https://" required></input>
                </div>
                <br></br>  
                
                <div className="readTime">
                    <input type="number" min="1" max="60" step="1"></input>
                </div>
                <br></br>
                
                <div className="blogType">
                    <select>
                        <option value="option1">Fitness recepty</option>
                        <option value="option2">Výživové doplnky</option>
                        <option value="option3">Strava a zdravý životný štýl</option>
                        <option value="option4">Cviky a tréningy</option>
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