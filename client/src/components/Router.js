import { BrowserRouter, Routes, Route, Outlet } from'react-router-dom';
import Jumbotron from './Jumbotron';
import DropDownMenu from './DropDownMenu';
import Footer from './Footer';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Login from '../pages/Login';

export default function Router() {

    const Layout = () => {
        return (
          <>
          <Jumbotron/>
          <DropDownMenu/>
          <Outlet />
          <Footer/>
          </>
        )
      };

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="login" element={<Login />} />
                </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}