import "./Product.scss";
import Prod from '../../../assets/products/earbuds-prod-1.webp';
import { useNavigate } from "react-router-dom";
const Product = () => {
    const navigate = useNavigate(); 
    return <div className="product-card">
        <div className="thumbnail">
            <img src={Prod} alt="" onClick={() => navigate('/product/id')}/>
        </div>
        <div className="prod-details">
            <span className="name">Product name</span>
            <span className="price">&#8377;599</span>
        </div>
    </div>;
};

export default Product;
