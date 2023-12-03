import React, { useEffect, useState } from 'react';
import BlogMenu from '../components/BlogMenu';
import BlogPost from '../components/BlogPost';
import '../css/css1.css';
import '../css/css2.css';
import '../css/css3.css';
import { Link } from 'react-router-dom';

export default function Blog() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('/blog'); // získává data z URL /blog
    const items = await data.json();
    setItems(items);
  };

  return (
    <>
      <BlogMenu />
      <h3>Najnovšie informácie zo sveta fitness | GymBean Blog</h3>

      {items.map((item, index) => (
        <BlogPost
          title={item.title}
          text={item.text}
          read_time={item.read_time}
          date={item.date}
          blog_type={item.blog_type}
        />
      ))}
      
    </>
  );
}
