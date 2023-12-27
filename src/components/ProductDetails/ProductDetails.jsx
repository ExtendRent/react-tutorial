import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, description, thumbnail, price, discountPercentage, category, brand /* diğer bilgiler buraya eklenir */ } = product;

  return (
    <div className="container mt-0 mt-md-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img
              src={thumbnail}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              {/* Diğer bilgileri buraya ekleyin */}
              <p>Price: {price} $</p>
              <p>Discount Percentage: {discountPercentage}%</p>
              <p>Category: {category}</p>
              <p>Brand: {brand}</p>

              {/* Geri dönme linki */}
              <a href="/products" className="btn btn-secondary">Geri Dön</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
