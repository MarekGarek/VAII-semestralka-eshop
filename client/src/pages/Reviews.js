import '../css/reviews.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider'
import React, { useContext } from 'react';

export default function Reviews() {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);

    return (
        <>
        {auth.isLoged ?
        <>
            <div className="h3div">
                <h3>Hodnotenia našich zákazníkov: <button className="btn-add-review" onClick={() => navigate("/blog/edit")} >Napíš recenziu</button> </h3>
            </div>
        </> 
        : 
        <h3>Hodnotenia našich zákazníkov: </h3>
        }

        <div className="grid-reviews greenBG">
            <div className="review">
                <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i>
                <i class="bi bi-star-half"></i> <i class="bi bi-star"></i>
            </div>

            <div className="editik">
                <button className="edit-review"> 
                    <i class="bi bi-pen"></i> 
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="delete-review"> 
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>

            <div className="header">Absolútne super</div>
            <div className="comment">
            Vyskúšal som rôzne príchute. Niektoré naozaj pôsobili trocha umelo(ale nič hrozné), iné boli na môj vkus prisladké(citrónová šťava to vyriešila) Treba vyskúšať, ktorá chuť vám sadne . Čo sa týka rozpustnosti, tá je výborná, úplne všetko bez problémov sa všetko rozpustí. A to nepoužívam "šejker", miešam to vo veľkom pohári s polievkovou lyžicou, do 5-10 sek všetko rozpustené.    
            </div>  
            <div className="bool greenBG">Odporúča</div>
            <div className="user greenBG">Miro</div>
            <div className="date greenBG">3.2.2024</div>
        </div>
        <br/>






        <div className="grid-reviews redBG">
            <div className="review">
                <i class="bi bi-star-fill"> </i>
                <i class="bi bi-star-half"> </i>
                <i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>
            </div>

            <div className="editik">
                <button className="edit-review"> 
                    <i class="bi bi-pen"></i> 
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="delete-review"> 
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>

            <div className="header">Nič moc</div>
            <div className="comment">
            Vyskúšal som rôzne príchute. Niektoré naozaj pôsobili trocha umelo(ale nič hrozné), iné boli na môj vkus prisladké(citrónová šťava to vyriešila) Treba vyskúšať, ktorá chuť vám sadne . Čo sa týka rozpustnosti, tá je výborná, úplne všetko bez problémov sa všetko rozpustí. A to nepoužívam "šejker", miešam to vo veľkom pohári s polievkovou lyžicou, do 5-10 sek všetko rozpustené.    
            </div>  
            <div className="bool redBG">Neodporúča</div>
            <div className="user redBG">Jaro12</div>
            <div className="date redBG">13.2.2024</div>
        </div>
        <br/>
        </>       
    )
}