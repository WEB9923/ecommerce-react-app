import Header from "../components/header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

