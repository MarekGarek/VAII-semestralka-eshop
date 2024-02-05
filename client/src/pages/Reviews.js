import '../css/reviews.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider'
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

function OneReview({item}) {

    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);

    let background = "";
    if (item.recommendation == 1) {
        background = "greenBG";
    } else if(item.recommendation == 0) {
        background = "redBG";
    }

    function drawStars(stars) {
        let fillStars,halfStars,emptyStars = 0;
        let fill = `<i class="bi bi-star-fill"></i>`;
        let half = `<i class="bi bi-star-half"></i>`;
        let empty = `<i class="bi bi-star"></i>`;
        
        fillStars = Math.floor(stars / 2);
        halfStars = stars % 2;
        emptyStars = 5 - (fillStars + halfStars);
        
        let result = "";
        for (let i = 0; i < fillStars; i++) {
            result += fill;
        }

        for (let i = 0; i < halfStars; i++) {
            result += half;
        }
        for (let i = 0; i < emptyStars; i++) {
            result += empty;
        }

        return result;
    }

    function formatDate(date){
        let enDate = new Date(item.date).toISOString().slice(0,10);
        return enDate.split('-').reverse().join('.');
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/reviews/delete/${id}`);
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className={`grid-reviews ${background}`}>
            <div className="review" dangerouslySetInnerHTML={{ __html: drawStars(item.stars) }} />
            <div className="editik">
            {auth.isLoged && (item.login === auth.login || auth.isAdmin === 'Y') ? 
                <>
                    <button className="edit-review"> 
                        <i class="bi bi-pen"></i> 
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="delete-review" onClick={() => handleDelete(item.idreviews)}> 
                        <i class="bi bi-x-lg"></i>
                    </button>
                </>
                : null}
                </div>
                
            <div className="header">{item.title}</div>
            <div className="comment">{item.text}</div>

            { 
            item.recommendation == 1 ? 
            <div className="bool greenBG">Odporúča</div>
            : 
            <div className="bool redBG">Neodporúča</div>
            }
            
            <div className={`user ${background}`}>{item.user}</div>
            <div className={`date ${background}`}>{formatDate(item.date)}</div>
        </div>
        <br/>
        </>       
    )
}

export default function Reviews() {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('/get/reviews');
        const items = await data.json();
        setItems(items);
    };
        

    return(
        <>
        {auth.isLoged ?
            <>
                <div className="grid-reviews">
                    <h3>Hodnotenia našich zákazníkov: <button className="btn-add-review" onClick={() => navigate("/reviews/edit")} >Napíš recenziu</button> </h3>
                </div>
            </> 
            : 
            <h3>Hodnotenia našich zákazníkov: </h3>
        }

        {items.map((item, index) => (
            <OneReview
              item={item}
            />
          ))}

        <div className="navbar-bottom">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a>3</a>
            <a>...</a>
            <a>106</a>
        </div>
        </>
     );
}