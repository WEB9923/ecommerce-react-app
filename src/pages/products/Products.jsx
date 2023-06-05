import "./Products.scss";
import Card from "../../components/card/Card.jsx";
import {useState, useEffect} from "react";
import axios from "axios";
import Loader from "../../components/loader/Loader.jsx";

export default function Products() {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const [limits, setLimits] = useState(10);
    const fetchingData = async (url) => {
        try {
            setisLoading(true);
            await axios.get(url).then((response) => {
                setData(response.data.products)
            });
        } catch (err) {
            setError(err);
        } finally {
            setisLoading(false);
        }
    }
    const handleMoreData = () => {
        setLimits(limits + 10)
    }
    useEffect(() => {
        fetchingData(`https://dummyjson.com/products?limit=${limits}`);
    }, [limits]);

    return (
        <>
            <section className="products-page">
                <div className="container">
                    <h1>products</h1>
                    <div className="wrapper">
                        {isLoading && <Loader />}
                        {
                            data && data.map((product) => (
                                <>
                                    <Card
                                        key={product.id}
                                        productId={product.id}
                                        image={product.images[0]}
                                        productTitle={product.title}
                                        productPrice={product.price}
                                    />
                                </>
                            ))
                        }
                        {
                            error && <h1>{error.message}</h1>
                        }
                    </div>
                    {
                        !isLoading && <button
                            className="more-data"
                            onClick={handleMoreData}
                        >
                            load more
                        </button>
                    }
                </div>
            </section>
        </>
    );
}
