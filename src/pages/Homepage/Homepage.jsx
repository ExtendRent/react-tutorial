import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Homepage() {

	useEffect(() => {
		/* fetch("https://dummyjson.com/products")
		.then(response => response.json())
		.catch(err => console.log(err)); */
		axiosGet();
	}, [])
	const awaitFetch = async () => {
		let response = await fetch("https://dummyjson.com/products");
		let json = await response.json();
		console.log(json);
	};

	const axiosGet = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		console.log(response.data);
	};
	return (
		<div>
			<div>
			<Link to={"/products"}>Ürünler Sayfası</Link>
			<br/>
			<Link to={"/addProduct"}>Ürünler Ekle</Link>
			
			</div>
		</div>
		)
}