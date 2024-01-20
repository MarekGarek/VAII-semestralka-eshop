import { useNavigate } from 'react-router-dom';

export default function BlogMenu() {
    const navigate = useNavigate();

    return(
        <div className="grid-container4">
            <div className="grid-item4">
                <button className="button">VÝŽIVOVÉ DOPLNKY</button>
            </div>
            <div className="grid-item4">
                <button className="button">CVIKY A TRÉNINGY</button>
            </div>
            <div className="grid-item4">
                <button className="button">FITNESS RECEPTY</button>
            </div>
            <div className="grid-item4">
                <button className="button">AKO SCHUDNÚŤ</button>
            </div>
            <div className="grid-item4">
                <button className="button">ZDRAVÝ ŽIVOTNÝ ŠTÝL</button>
            </div>
            <div className="grid-item4">
                <button className="button" onClick={() => navigate("/blog/calculator")}>FITNESS KALKULAČKA</button>
            </div>
        </div>
    )
}