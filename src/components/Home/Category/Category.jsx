import "./Category.scss";
import Cat1 from "../../../assets/category/cat-1.jpg";
import Cat2 from "../../../assets/category/cat-2.jpg";
import Cat3 from "../../../assets/category/cat-3.jpg";
import Cat4 from "../../../assets/category/cat-4.jpg";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img src={Cat1} alt=""  onClick={() => navigate('/category/id')}/>
        </div>
        <div className="category">
          <img src={Cat4} alt="" onClick={() => navigate('/category/id')} />
        </div>
        <div className="category">
          <img src={Cat2} alt="" onClick={() => navigate('/category/id')}/>
        </div>
        <div className="category">
          <img src={Cat3} alt="" onClick={() => navigate('/category/id')}/>
        </div>
      </div>
    </div>
  );
};

export default Category;
