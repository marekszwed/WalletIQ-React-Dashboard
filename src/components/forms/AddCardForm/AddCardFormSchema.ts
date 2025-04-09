import * as yup from "yup";

export const AddCardSchema = yup.object({
	creditCardNumber: yup
		.string()
		.min(16)
		.required("Credit card number is required"),
	cvcNumber: yup.string().min(3).required("CVC number is required"),
	expirationDate: yup.string().min(4).required("Expiration date is required"),
});
