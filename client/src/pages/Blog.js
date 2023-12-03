import React, { useEffect, useState } from 'react';
import BlogMenu from '../components/BlogMenu';
import BlogPost from '../components/BlogPost';
import '../css/css1.css';
import '../css/css2.css';
import '../css/css3.css';

export default function Blog() {

  return (
    <>
      <BlogMenu />
      <h3>Najnovšie informácie zo sveta fitness | GymBean Blog</h3>
      <BlogPost />

      <div class="navbar-bottom">
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a>3</a>
        <a>...</a>
        <a>106</a>
      </div>

    </>
  );
}
