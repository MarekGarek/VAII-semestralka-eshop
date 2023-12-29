export default function LoginComponent() {
    return (
        <div className="grid-container-r">
            <div className="item1-r">
                <form>
                    <label htmlFor="fname">Meno:</label><br />
                    <input type="text" id="fname" name="fname" value="" /><br />
                    <label htmlFor="lname">Priezvisko:</label><br />
                    <input type="text" id="lname" name="lname" value="" /><br />
                    <label htmlFor="dob">Dátum narodenia:</label><br />
                    <input type="date" id="dob" name="dob" value="" /><br />
                </form>
            </div>
            <div className="item2-r">
                <form>
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" id="email" name="email" value="" /><br />
                    <label htmlFor="password">Heslo:</label><br />
                    <input type="text" id="password" name="password" value="" /><br />
                    <label htmlFor="confirm-password">Potvrdiť heslo:</label><br />
                    <input type="text" id="confirm-password" name="confirm-password" value="" />
                </form>
            </div>
            <div className="item3-r">
                <form action="/action_page.php">
                    
                    <label htmlFor="subscribe"> 
                        Prihlásiť sa na odber noviniek 
                        <input type="checkbox" className="newsCheckBox" /> 
                    </label> <br/>
                </form>
                <button type="button" onClick={() => alert('Úspešne ste sa zaregistrovali!')}>REGISTRÁCIA</button>
            </div>
            <div className="item5-r">Osobné údaje</div>
            <div className="item6-r">Prihlasovacie údaje</div>
        </div>
    );
}