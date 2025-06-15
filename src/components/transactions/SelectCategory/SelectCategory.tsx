import { UseFormRegister } from "react-hook-form";
import * as S from "./SelectCategory.styled";
import { AddTransactionType } from "../../slices/TransactionFormSlice";

type Props = {
	register: UseFormRegister<Omit<AddTransactionType, "id">>;
	transactionType: "income" | "outcome" | undefined;
};

const incomeItems = [
	{ option: "Salary" },
	{ option: "Freelance" },
	{ option: "Investmens" },
	{ option: "Gifts" },
	{ option: "Othes income" },
];

const outcomItems = [
	{ option: "Rent" },
	{ option: "Healthcare" },
	{ option: "Shopping" },
	{ option: "Investmens" },
	{ option: "Groceries" },
	{ option: "Transportation" },
	{ option: "Dining" },
	{ option: "Entertainment" },
	{ option: "Other outcome" },
];

function SelectCategory({ register, transactionType }: Props) {
	const categories =
		transactionType === "income"
			? incomeItems
			: transactionType === "outcome"
				? outcomItems
				: [];

	return (
		<S.SelectorBox>
			<S.Label htmlFor="category-selector">Category</S.Label>
			<S.Select id="category-selector" {...register("category")}>
				{categories.map((item) => (
					<S.Option>{item.option}</S.Option>
				))}
			</S.Select>
		</S.SelectorBox>
	);
}

export default SelectCategory;
