import BlogMenu from '../components/BlogMenu';
import BlogPost from '../components/BlogPost';
import '../css/css1.css';
import '../css/css2.css';
import '../css/css3.css';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const navigate = useNavigate();

  return (
    <>
      <BlogMenu />
      <h3>Najnovšie informácie zo sveta fitness | Blog <button class="btn-add" onClick={() => navigate("/blog/edit")} >Pridať príspevok</button> </h3>
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
