import React, { useEffect, useState } from 'react';

function Post({title,text,read_time,date,blog_type,url}) {
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
            <div className="item5"><button className="button2">ČÍTAJ VIAC</button></div>
        </div>
    );
}

export default function BlogPost() {
        useEffect(() => {
          fetchItems();
        }, []);
      
        const [items, setItems] = useState([]);
        const fetchItems = async () => {
          const data = await fetch('/blog'); // získává data z URL /blog
          const items = await data.json();
          setItems(items);
        };

    return(
        items.map((item, index) => (
            <Post
              title={item.title}
              text={item.text}
              read_time={item.read_time}
              date={item.date}
              blog_type={item.blog_type}
              url={item.url}
            />
          ))
     );
}