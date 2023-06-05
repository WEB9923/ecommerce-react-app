import "./Footer.scss";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";
import {FaFacebook, FaGithub, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <Link to={"/"} className="footer-logo">
                            <img src={Logo} alt="logo image"/>
                        </Link>
                        <div className="social-icons">
                            <a href="https://facebook.com" rel="noreferrer" target="_blank">
                                <FaFacebook size={25}/>
                            </a>
                            <a href="https://twitter.com" rel="noreferrer" target="_blank">
                                <FaTwitter size={25}/>
                            </a>
                            <a href="https://github.com" rel="noreferrer" target="_blank">
                                <FaGithub size={25}/>
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="col">
                            <h3>site map</h3>
                            <Link to={"/"}>home</Link>
                            <Link to={"/products"}>products</Link>
                        </div>
                        <div className="col">
                            <h3>title column</h3>
                            <p>lorem ipsum dolor</p>
                            <p>lorem ipsum</p>
                            <p>lorem</p>
                            <p>lorem ipsum dolor</p>
                            <p>lorem dolor</p>
                            <p>lorem</p>
                        </div>
                        <div className="col">
                            <h3>title col</h3>
                            <p>lorem ipsum dolor</p>
                            <p>lorem ipsum</p>
                            <p>lorem ipsum</p>
                            <p>lorem</p>
                        </div>
                        <div className="col">
                            <h3>title column</h3>
                            <p>lorem ipsum dolor</p>
                            <p>lorem ipsum</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
                        <div className="col">
                            <h3>title col site</h3>
                            <p>lorem ipsum dolor</p>
                            <p>lorem ipsum</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem ipsum</p>
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="footer-info">
                        <p>this website created with ❤️ & coffee.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

