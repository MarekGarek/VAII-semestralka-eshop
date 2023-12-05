import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from'react-router-dom';

function Post({item}) {
    const navigate = useNavigate();
    let title=item.title;
    let text=item.text
    let read_time=item.read_time
    let date=item.date
    let blog_type=item.blog_type
    let url=item.url
    let id=item.id_blog

    // kodovanie objektu aby sa dal poslat ako parameter cez URL
    let jsonItem = JSON.stringify(item);
    const encodedJsonItem = encodeURIComponent(jsonItem);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/blog/delete/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="grid-container5">
            <div className="item1">
                <img className="obrazok" src={url} alt="obrazok" />
            </div>
            <div className="item2">{title}</div>
            <div className="item3">{text}</div>
            <div className="item4">
                <p>{blog_type}</p>
                <p>{date}</p>
                <p>Čas čítania {read_time} min.</p>
            </div>
            <div className="item5">
                <button className="button2">ČÍTAJ VIAC</button>
                <button className="edit" onClick={() => navigate(`/blog/edit?id=${encodedJsonItem}`)}>EDIT</button> 
                <button className="delete" onClick={() => handleDelete(id)}>DELETE</button>
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
        const data = await fetch('/blog');
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