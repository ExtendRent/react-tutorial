import React from "react";
import { Form, Formik} from "formik";
import {number, object, string} from "yup";
import FormikInput from "../../components/FormikInput/FormikInput.tsx";
import { passwordValidator } from "../../services/utils/customValidations.ts";


type Props = {};

const AddProduct = (props: Props) => {
	const customInitialValues = {
		title: "",
		description: "",
		price: 0,
		stock: 0,
	};

	const customValidationSchema = object({
		title: string()
			.required("Başlık alanı zorunludur.")
			.min(3, "Başlık alanı en az 3 karakter olmalıdır.")
			.max(50)
			.test(
				"my-custom-rule",
				"En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.",
				passwordValidator,
			),
		description: string().required().min(5).max(300),
		price: number().required().min(0),
		stock: number().required().min(0).integer(),
	});

	return (
		<div className="container mt-5">
			<Formik
				initialValues={customInitialValues}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={customValidationSchema}
			>
				<Form>
					<FormikInput
						name="title"
						label="Ürün Adı"
						placeHolder="Ürün adı giriniz..."
					/>
					<FormikInput name="description" label="Ürün Açıklaması" />
					<FormikInput name="price" label="Ürün Fiyatı" type="number" />
					<FormikInput name="stock" label="Ürün Stok" />
					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</Form>

			</Formik>
		</div>
	);
};

export default AddProduct;
