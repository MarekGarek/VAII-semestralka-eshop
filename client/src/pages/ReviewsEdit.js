export default function ReciewsEdit(){
    return(
        <>
        <br/><br/>
        <div className="grid-reviews greenBG">
            <div className="review">
                <label>Hodnotenie od 1 -{">"} 10 (najlepšie)</label><br/>
                <input type="number" min="1" max="10" style={{width: '75px'}}></input>
            </div>

            <div className="editik">
            </div>

            <div className="header">
                <label style={{fontWeight: 'normal'}}>Nadpis:</label>
                <input type="text"></input>
            </div>
            <div className="comment">
                <lavel>Recenzia:</lavel>
                <textarea id="text" name="text" rows="4" cols="50" placeholder="Zadejte text..." required maxLength={5000}></textarea>
            </div>  
            <div className="bool greenBG">
                <label>Odporúčate našu stránku?</label>
                <input type="checkbox" className="review-checkbox" style={{width: '60px'}}></input>
            </div>
            <div className="date greenBG" style={{paddingBottom: '0px', paddingTop: '4px'}}>
                <button className="submit" style={{backgroundColor: '#52ba56'}}>Odoslať</button>
            </div>
        </div>
        <br/><br/>
        </>
    )
}