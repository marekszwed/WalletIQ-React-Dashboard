import { UseFormRegister } from "react-hook-form";
import * as S from "./SelectCategory.styled";
import { AddTransactionType } from "../../slices/TransactionFormSlice";

type Props = {
	register: UseFormRegister<Omit<AddTransactionType, "id">>;
};

function SelectCategory({ register }: Props) {
	return (
		<S.SelectorBox>
			<S.Label htmlFor="category-selector">Category</S.Label>
			<S.Select id="category-selector" {...register("category")}>
				<S.Option>dhsfhsdf</S.Option>
				<S.Option>dhsfhsdfwef</S.Option>
				<S.Option>dhsfhsdfdd</S.Option>
				<S.Option>dhsfhsdfdd</S.Option>
			</S.Select>
		</S.SelectorBox>
	);
}

export default SelectCategory;
