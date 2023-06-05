import "./Header.scss";
import Banner from "../../assets/banner3.png";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="hero">
                    <div className="left-side">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                            harum, voluptas! Autem cumque delectus dolor eaque earum eligendi
                            fugit ipsa iusto, nam natus, sapiente temporibus veritatis?
                        </p>
                        <Link to={"/products"} className="hero-btn">go to products page</Link>
                    </div>
                    <div className="right-side">
                        <img src={Banner} alt="banner image"/>
                    </div>
                </div>
            </header>
        </>
    )
}

