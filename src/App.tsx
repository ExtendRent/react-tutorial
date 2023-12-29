import React , {ReactElement} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.tsx";
import ProductDetail from "./pages/ProductDetails/ProductDetails.tsx";
import Products from "./pages/Products/Products.tsx";
import CustomNavbar from "./components/Navbar/CustomNavbar.tsx";
import AddProduct from "./pages/AddProduct/AddProduct.tsx";


function App(): ReactElement {
	return (
		<div>
		<BrowserRouter>

		<CustomNavbar/>

			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/product-detail/:id" element={<ProductDetail />}></Route>
				<Route path="/add-product" element={<AddProduct />}></Route>
				<Route path="/products" element={<Products />}></Route>
			</Routes>
		</BrowserRouter>
		</div>
	);
}

export default App;