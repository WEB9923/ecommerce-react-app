import "./NotFound.scss";
import Error from "../../assets/error.png";
import {Link} from "react-router-dom";

export default function NotFound() {
    document.title = "error!"
    return (
        <>
            <div className="error-page">
                <img src={Error} alt="error image"/>
                <h1>404 page not found!</h1>
                <Link to={"/"}>
                    return home page
                </Link>
            </div>
        </>
    );
}

