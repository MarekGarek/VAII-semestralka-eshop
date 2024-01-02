import Carousel from '../components/Carousel';
import '../css/css1.css';
import '../css/css2.css';
import Card from '../components/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Home() {
    
    let [img, setImg] = useState();
    let [img1, setImg1] = useState();
    let [name, setName] = useState();
    let nazov = "Test nazov obrazka";

    const postImg = async () => {
        try {
            const formData = new FormData();
            formData.append('blogImg', img);
            formData.append('name', nazov);
            const response = await axios.post('http://localhost:4000/post/img', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (img !== null) {
            postImg();
        }
    };


    useEffect(() => {
        fetchItems();
    }, []);
    
    const [image, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('/get/img');
        const image = await data.json();
        setItems(image);
        setImg1(image[0].img);
        setName(image[0].name);
    };

    

    return (
        <>

        <Carousel/>
        <div class="grid-container1">
            <div class="grid-item1"><i class="bi bi-bag-heart-fill"> 25M+ <em class="odsek-text">spokojných zákazníkov &nbsp;&nbsp;</em></i></div>
            <div class="grid-item1"><i class="bi bi-hourglass-split"> 24 hodín <em class="odsek-text">rýchle dodanie &nbsp;&nbsp;</em></i></div>
            <div class="grid-item1"><i class="bi bi-truck">doprava zadarmo <em class="odsek-text">pri nákupe nad 25e &nbsp;&nbsp;</em></i></div>
            <div class="grid-item1"><i class="bi bi-bag-fill">10 000+ <em class="odsek-text">produktov </em></i></div>
        </div>
        <p class="mininadpis">Objavte overené produkty podľa vášho cieľa. Chcete: </p>
        
        <h3>{name}</h3>
        <img alt=":)" src={`data:image/png;base64,${img1}`} />
        
        <br/><br/><br/><br/><br/>

        <form encType="multipart/form-data">
            <input type="file" name="blogImg" onChange={(e) => setImg(e.target.files[0])}></input>
            <button type="button" onClick={handleSubmit}>Upload</button>
        </form>


        <br/><br/><br/><br/><br/>
        </>
    )
}