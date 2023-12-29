import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verileri API'ye gönder
      await axios.post('https://dummyjson.com/products', newProduct);
      // İşlem başarılı ise sayfayı yenile (veya başka bir işlem yapabilirsiniz)
      window.location.reload();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Giriş alanları */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={newProduct.title} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={newProduct.description} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" id="price" name="price" value={newProduct.price} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="discountPercentage" className="form-label">Discount Percentage</label>
          <input type="number" className="form-control" id="discountPercentage" name="discountPercentage" value={newProduct.discountPercentage} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Brand</label>
          <input type="text" className="form-control" id="brand" name="brand" value={newProduct.brand} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name="category" value={newProduct.category} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">Thumbnail URL</label>
          <input type="url" className="form-control" id="thumbnail" name="thumbnail" value={newProduct.thumbnail} onChange={handleInputChange} required />
        </div>

        {/* Diğer giriş alanları da ekleyebilirsiniz */}

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}
