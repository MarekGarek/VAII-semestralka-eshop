import Carousel from '../components/Carousel';
import '../css/css1.css';
import '../css/css2.css';
import Card from '../components/Card';
import React, { useEffect, useState } from 'react';

export default function Home() { 

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [products, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('/get/products');
        const products = await data.json();
        setItems(products);
    };

    return (
        <>
        <Carousel/>
        <div className="grid-container1">
            <div className="grid-item1"><i className="bi bi-bag-heart-fill"> 25M+ <em className="odsek-text">spokojných zákazníkov &nbsp;&nbsp;</em></i></div>
            <div className="grid-item1"><i className="bi bi-hourglass-split"> 24 hodín <em className="odsek-text">rýchle dodanie &nbsp;&nbsp;</em></i></div>
            <div className="grid-item1"><i className="bi bi-truck">doprava zadarmo <em className="odsek-text">pri nákupe nad 25e &nbsp;&nbsp;</em></i></div>
            <div className="grid-item1"><i className="bi bi-bag-fill">10 000+ <em className="odsek-text">produktov </em></i></div>
        </div>
        <p className="mininadpis">Objavte overené produkty podľa vášho cieľa. Chcete: </p>
        
        <div className="grid-container3">
        {
            products.map((product, index) => (
                <Card
                  key={index}
                  name={product.name}
                  pieces={product.pieces}
                  price={product.price}
                  img={product.img}
                />
              ))
        }
        </div>
        
        </>
    )
}