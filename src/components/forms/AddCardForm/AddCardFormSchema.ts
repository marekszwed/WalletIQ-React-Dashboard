import * as yup from "yup";

export const AddCardSchema = yup.object({
	cardName: yup.string().required("Enter the name of the card"),
	creditCardNumber: yup
		.string()
		.min(16)
		.required("Credit card number is required"),
	cvcNumber: yup.string().min(3).required("CVC number is required"),
	expirationDate: yup.string().min(4).required("Expiration date is required"),
	availableBalance: yup.string().required("Available balance is required"),
});
