import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DropDownMenu() {
    const navigate = useNavigate();

    return (
        <div className="grid-container2">
            <div className="grid-item2">
                <div className="dropdown2">
                    <button className="dropbtn">ŠPORTOVÁ VÝŽIVA</button>
                    <div className="dropdown-content">
                        <a href="#">Proteíny</a>
                        <a href="#">Kreatíny</a>
                        <a href="#">Gainery</a>
                        <a href="#">Vitamíny</a>
                        <a href="#">Minerály</a>
                    </div>
                </div>
            </div>
            <div className="grid-item2">
                <div className="dropdown2">
                    <button className="dropbtn">ZDRAVÉ POTRAVINY</button>
                    <div className="dropdown-content">
                        <a href="#">Fitnes jedlo</a>
                        <a href="#">Cestoviny</a>
                        <a href="#">Snacky</a>
                        <a href="#">Nápoje</a>
                    </div>
                </div>
            </div>
            <div className="grid-item2">
                <div className="dropdown2">
                    <button className="dropbtn">ŠPORTOVÉ OBLEČENIE</button>
                    <div className="dropdown-content">
                        <a href="#">Pánske</a>
                        <a href="#">Dámske</a>
                    </div>
                </div>
            </div>
            <div className="grid-item2">
                <div className="dropdown2">
                    <button className="dropbtn">PRÍSLUŠENSTVO</button>
                    <div className="dropdown-content">
                        <a href="#">Tašky</a>
                        <a href="#">Pomôcky na cvičenie</a>
                        <a href="#">Pomôcky na doma</a>
                        <a href="#">Ostatné</a>
                    </div>
                </div>
            </div>
            <div className="grid-item2">
                <div className="dropdown2">
                    <button onClick={() => navigate('blog')} className="dropbtn">BLOG</button>
                </div>
            </div>
        </div>
    );
}
