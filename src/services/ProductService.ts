import axios from "axios";
import {GetAllProductsModel} from "../models/Responses/GetAllProductsModel";
import {ProductModel} from "../models/Responses/ProductModel";

class ProductService {
	getAll() {
		return axios.get<GetAllProductsModel>("https://dummyjson.com/products");
	}

	getById(id: number) {
		return axios.get<ProductModel>("https://dummyjson.com/products/" + id);
	}
}

export default ProductService;