import React, {useEffect, useState} from "react";
import {ProductModel} from "../../models/Responses/ProductModel.ts";
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import ProductService from "../../services/ProductService.ts";
import ProductCard2 from "../../components/ProductCard/ProductCard2.tsx";
import "./Products.css";
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
        <div className="page-bg ">
		<div className="container page-margin-top">
			<div className="row page-padding-right-left">
				{products.map(product => (
					<div key={product.id} className="col-3">
						<ProductCard2 product={product} />
					</div>
				))}
			</div>
		</div>
        </div>
	);
};

export default Products;