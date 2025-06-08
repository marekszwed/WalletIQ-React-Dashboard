import * as S from "./AddTransactionForm.styled";
import GeneralModal from "../../common/GeneralModal";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddTransactionSchema } from "./AddTransactionSchema";
import { useDispatch } from "react-redux";
import SelectCategory from "../../transactions/SelectCategory";
import { Button, InputContainerFormLayout, Toast } from "../..";
import { useForm } from "react-hook-form";
import {
	AddTransactionType,
	transactionData,
} from "../../slices/TransactionFormSlice";

type AddTransactionProps = {
	isOpen?: boolean;
	onClose: () => void;
};

function AddTransactionForm({ isOpen, onClose }: AddTransactionProps) {
	const dispatch = useDispatch();
	const modalRef = useRef<HTMLFormElement>(null);

	useClickOutside({ ref: modalRef, onClickOutside: onClose });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Omit<AddTransactionType, "id">>({
		resolver: yupResolver(AddTransactionSchema),
	});

	async function onSubmit(data: Omit<AddTransactionType, "id">) {
		try {
			const newTransaction = {
				...data,
				id: crypto.randomUUID(),
			};

			const result = await dispatch(transactionData(newTransaction));
			if (result.type === "transaction/transactionData") {
				onClose();
				reset();
			} else {
				Toast.warning("Data transmitted incorrectly");
			}
		} catch (error) {
			Toast.error(`An error occurred while adding data: ${error}`);
		}
	}

	if (!isOpen) return null;

	return (
		<GeneralModal>
			<S.Form ref={modalRef} onSubmit={handleSubmit(onSubmit)}>
				<S.Heading>
					<S.Legend>Add Transaction</S.Legend>
					<S.Description>
						Enter the details of your financial transaction
					</S.Description>
				</S.Heading>
				<InputContainerFormLayout>
					<S.Label htmlFor="title">Title</S.Label>
					<S.Input
						{...register("title")}
						id="title"
						placeholder="Enter the title of the transaction"
					/>
					<S.InputError text={errors.title?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label htmlFor="amount">Amount</S.Label>
					<S.Input
						{...register("amount")}
						id="amount"
						type="number"
						placeholder="$ 0.00"
					/>
					<S.InputError text={errors.amount?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label>Transaction type</S.Label>
					<S.Options>
						<S.IncomeInput
							{...register("transactionType")}
							type="radio"
							id="income"
							value="income"
						/>
						<S.LabelForTransactionType htmlFor="income">
							Income
						</S.LabelForTransactionType>
						<S.OutcomeInput
							{...register("transactionType")}
							type="radio"
							id="outcome"
							value="outcome"
						/>
						<S.LabelForTransactionType htmlFor="outcome">
							Outcome
						</S.LabelForTransactionType>
					</S.Options>
					<S.InputError text={errors.transactionType?.message || ""} />
				</InputContainerFormLayout>
				<SelectCategory register={register} />
				<InputContainerFormLayout>
					<S.Label htmlFor="date">Date</S.Label>
					<S.CalendarInput {...register("date")} id="date" type="date" />
					<S.InputError text={errors.date?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label htmlFor="description">Description (Optional)</S.Label>
					<S.TextArea {...register("description")} id="description" />
					<S.InputError text={errors.description?.message || ""} />
				</InputContainerFormLayout>
				<S.ButtonContainer>
					<S.CancelButton type="button" text="Cancel" onClick={onClose} />
					<Button type="submit" text="Add transaction" />
				</S.ButtonContainer>
			</S.Form>
		</GeneralModal>
	);
}

export default AddTransactionForm;
