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
                    <input type="text" id="dob" name="dob" value="" /><br />
                    <label htmlFor="gender">Pohlavie:</label><br />
                    <input type="text" id="gender" name="gender" value="" />
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
                    <input type="checkbox" id="subscribe" name="subscribe" value="Bike" />
                    <label htmlFor="subscribe"> Prihlásiť sa na odber noviniek</label><br />
                </form>
                <button type="button" onClick={() => alert('Úspešne ste sa zaregistrovali!')}>REGISTRÁCIA</button>
            </div>
            <div className="item4-r"></div>
            <div className="item5-r">Osobné údaje</div>
            <div className="item6-r">Prihlasovacie údaje</div>
        </div>
    );
}