import "./Card.scss";
import {Link} from "react-router-dom";

export default function Card(props) {
    // eslint-disable-next-line react/prop-types
    const {productTitle,productPrice,productId,image} = props;
    return (
        <>
            <div className="card">
                <div className="card-top">
                    <img src={image} alt=""/>
                </div>
                <div className="card-body">
                    <h2 className="product-title">{productTitle}</h2>
                    <h3 className="product-price">price: ${productPrice}</h3>
                </div>
                <div className="card-footer">
                    <Link to={`/product/${productId}`}>go to details page</Link>
                </div>
            </div>
        </>
    );
}

