import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ProductService from "../../services/ProductService.ts";
import { ProductModel } from "../../models/Responses/ProductModel.ts";
import DetailedPCard from "../../components/ProductCard/DetailedPCard.tsx"
import "./ProductDetails.css"
type Props = {};

const ProductDetail = (props: Props) => {
	const [product, setProduct] = useState<ProductModel>();
	
	const params = useParams<{id: string}>();
	
	useEffect(() => {
		if (params.id) {
			// eğer bu değişken var ise
			// detay sayfasına istek at..
			fetchDetails(params.id);
		}
	}, []);

	const fetchDetails = async (id: string) => {
		let service: ProductService = new ProductService();
		let response = await service.getById(parseInt(id));
		setProduct(response.data); 
	};
	
	return (
	
		<div className="container" >
			<div className="row">
			{product ? (
          		<div className="col-8">
            <DetailedPCard product={product} />
          </div>
        ) : (
          <p>Ürün bulunamadı.</p>
        )}
			</div>
		</div>
        
		);
};

export default ProductDetail;
// getbyid?id=1 query string  1. yol
// getById/1 path variable 2. yol