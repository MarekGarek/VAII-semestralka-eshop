import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from'react-router-dom';
import AuthContext from '../AuthProvider'

function Post({item}) {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);

    // kodovanie objektu aby sa dal poslat ako parameter cez URL
    let jsonItem = JSON.stringify(item);
    const encodedJsonItem = encodeURIComponent(jsonItem);
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/blog/delete/${id}`);
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }

    function formatDate(date){
        let enDate = new Date(item.date).toISOString().slice(0,10);
        return enDate.split('-').reverse().join('.');
    }

    return(
        <div className="grid-container5">
            <div className="item1">
                <img className="obrazok" src={`data:image/png;base64,${item.img}`} alt="obrazok" />
            </div>
            <div className="item2">{item.title}</div>
            <div className="item3">{item.text}</div>
            <div className="item4">
                <p>{item.blog_type}</p>
                <p>{formatDate(item.date)}</p>
                <p>Čas čítania {item.read_time} min.</p>
                <p>Autor: {item.login} </p>
            </div>
            <div className="item5">
                
                <button className="button2">ČÍTAJ VIAC</button>
                {auth.isLoged && (item.login === auth.login || auth.isAdmin === 'Y') ? 
                <>
                    <button className="delete" onClick={() => handleDelete(item.id_blog)}>DELETE</button>
                    <button className="edit" onClick={() => navigate(`/blog/edit?id=${encodedJsonItem}`)}>EDIT</button> 
                </>
                : null}
                
            </div>
        </div>
    );
}

//ziskanie dat z databazi
export default function BlogPost() {
    useEffect(() => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('/get/blog');
        const items = await data.json();
        setItems(items);
    };
        

    return(
        items.map((item, index) => (
            <Post
              item={item}
            />
          ))
     );
}