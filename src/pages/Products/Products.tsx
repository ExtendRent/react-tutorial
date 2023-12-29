import React, {useEffect, useState} from "react";
import {ProductModel} from "../../models/Responses/ProductModel.ts";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import ProductService from "../../services/ProductService.ts";

type Props = {};

const Products = (props: Props) => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []); 

	const fetchProducts = () => {
		let service: ProductService = new ProductService();
		service.getAll().then(response => {
			setProducts(response.data.products);
		});
	};

	return (
        <div className="bg-dark">
		<div className="container">
			<div className="row">
				{products.map(product => (
					<div key={product.id} className="col-3">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
        </div>
	);
};

export default Products;