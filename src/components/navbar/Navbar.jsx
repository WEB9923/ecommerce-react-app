import "./Navbar.scss";
import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/logo.png";
import {BsShop} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to={"/"} className="logo">
                        <img src={Logo} alt="logo"/>
                    </Link>
                    <ul className="link-list">
                        <li>
                            <NavLink to={"/"}>
                                <AiOutlineHome size={22}/>
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>
                                <BsShop size={22}/>
                                products
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

