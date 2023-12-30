export default function RegisterComponent() {
    return (
        <div className="grid-container-r">
            <div className="item1-r">
                <form>
                    <label>Login:</label>
                    <input type="text"/>
                    
                    <label >Meno:</label>
                    <input type="text"/>
                    
                    <label >Priezvisko:</label>
                    <input type="text"/>
                </form>
            </div>
            <div className="item2-r">
                <form>
                    <label>Email:</label>
                    <input type="email"/>

                    <label>Heslo:</label>
                    <input type="password" />

                    <label>Potvrdiť heslo:</label>
                    <input type="password"/>
                </form>
            </div>
            <div className="item3-r">
                <div className="newsDiv">
                    <label> Prihlásiť sa na odber noviniek </label> 
                    <input type="checkbox" className="newsCheckBox" />
                </div>
                <button type="button" onClick={() => alert('Úspešne ste sa zaregistrovali!')}>REGISTRÁCIA</button>
            </div>
            <div className="item5-r">Osobné údaje</div>
            <div className="item6-r">Prihlasovacie údaje</div>
        </div>
    );
}