import * as yup from "yup";

export const AddTransactionSchema = yup.object({
	title: yup
		.string()
		.max(20, "Title must be at most 20 characters")
		.required("Title is required"),
	amount: yup
		.number()
		.typeError("Amount must be a number")
		.positive("Amount must be greater than 0")
		.required("Enter the amount"),
	transactionType: yup
		.string()
		.oneOf(["income", "outcome"], "Select a transaction type")
		.required("Transaction type is required"),
	category: yup.string().required("Select a category"),
	date: yup.string().required("Date is a required field"),
	description: yup
		.string()
		.max(100, "Description must be at most 100 characters")
		.optional(),
});
