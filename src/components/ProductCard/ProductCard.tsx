import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ProductModel } from "../../models/responses/ProductModel";
import "./ProductCard.css"

type ProductCardProps = {
  product: ProductModel;
  title?: string;
};

const CustomNextArrow = (props: any) => (
  <button
    {...props}
    className="carousel-control-next custom-arrow"
    type="button"
    aria-label="Next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
);

const CustomPrevArrow = (props: any) => (
  <button
    {...props}
    className="carousel-control-prev custom-arrow"
    type="button"
    aria-label="Previous"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
);

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { product } = props;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    
    <div className="card product-card">
      <Slider {...sliderSettings}>
        {product.images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            
            <Link to={`/product-detail/${product.id}`}>
            <img
              src={image}
              className="card-img"
              alt={`Product Image ${index + 1}`}
            />
        </Link>
            
          </div>
        ))}
      </Slider>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="action-row">
        <Link
					to={"/product-detail/" + props.product.id } className="btn btn-primary card-button">Detail</Link>
          
        <button className="btn btn-danger card-button">Delete</button>  
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
