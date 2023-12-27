import React, { useState } from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom';
export default function ProductCard(props) {

  const [idList, setIdList] = useState([]);
  const [fullList,setFullList] = useState([])

  
  const addFullList = (product1) => {
    setFullList(fullList => [...fullList, product1]);   
  };
  
 
  const addToIdList = (id) => {
    if (!idList.includes(id)) {
      setIdList([...idList, id]);
    }
  };

  const handleDelete = (id) => {
    addToIdList(id);
    alert('Silme işlemi gerçekleştiriliyor...');
  };

  let newValue = fullList.filter((deleteProduct) => {
    return idList.map((id) => id !== deleteProduct.id).every(Boolean);
  });
 
  return (
    <div className="row">
        {newValue.map((product) => (
              <div class="card" key={product.id}>
                  <img
                    src={product.thumbnail}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                  
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <Link to={`/productDetails/${product.id}`} class="btn btn-primary">Ürün Detayları</Link>
                    
                    {/* <button class="btn btn-danger">Sil</button> */}
                    <Link
                        onClick={() =>  handleDelete(product.id)}
                        class="btn btn-danger btn-sm btn-review"
                      ></Link> Delete
                  </div>
            </div>
        ))}
    </div>
	);
}
