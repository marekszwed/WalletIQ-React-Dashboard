import { useForm } from "react-hook-form";
import * as S from "./AddCardForm.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCardSchema } from "./AddCardFormSchema";
import { useDispatch } from "react-redux";
import { cardData } from "../cardFormSlice";
import { useNavigate } from "react-router-dom";
import InputFormLayout from "../../Layout/InputFormLayout";
import InputContainerFormLayout from "../../Layout/InputContainerFormLayout";
import ReactDOM from "react-dom";
import Toast from "../../Toast";
import { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

interface AddCardFormTypes {
	cardName: string;
	creditCardNumber: string;
	cvcNumber: string;
	expirationDate: string;
	availableBalance: string;
}

type AddCardFormProps = {
	isOpen: boolean;
	onClose: () => void;
};

function AddCardForm({ isOpen, onClose }: AddCardFormProps) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const modalRef = useRef<HTMLFormElement>(null);

	useClickOutside({ ref: modalRef, onClickOutside: onClose });

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<AddCardFormTypes>({ resolver: yupResolver(AddCardSchema) });

	function handleCardNumberFormatChange(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		const formatValue = event.target.value
			.replace(/\D/g, "")
			.replace(/(\d{4})(?=\d)/g, "$1 ");
		setValue("creditCardNumber", formatValue);
	}

	async function onSubmit(data: Omit<AddCardFormTypes, "id">) {
		try {
			const newCard = {
				...data,
				id: crypto.randomUUID(),
			};
			const result = await dispatch(cardData(newCard));

			if (result.type === "card/cardData") {
				Toast.success("Data saved successfully");
				navigate("/cards");
				onClose();
				reset();
			} else {
				Toast.warning("Data transmitted incorrectly");
			}
		} catch (error) {
			Toast.error(`An error occurred while logging in: ${error}`);
		}
	}

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<S.FormOverlay>
			<S.Form ref={modalRef} onSubmit={handleSubmit(onSubmit)}>
				<InputContainerFormLayout>
					<S.Label htmlFor="card-name">Name your card</S.Label>
					<InputFormLayout
						{...register("cardName")}
						id="card-name"
						placeholder="Ex. first card"
					/>
					<S.InputError text={errors.cardName?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label htmlFor="card-number">Number of your credit card</S.Label>
					<InputFormLayout
						{...register("creditCardNumber")}
						id="card-number"
						placeholder="**** **** **** ****"
						maxLength={19}
						onChange={handleCardNumberFormatChange}
					/>
					<S.InputError text={errors.creditCardNumber?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label htmlFor="cvc-number">CVC number</S.Label>
					<InputFormLayout
						{...register("cvcNumber")}
						id="cvc-number"
						placeholder="***"
						maxLength={3}
					/>
					<S.InputError text={errors.cvcNumber?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label htmlFor="expiration-date">Expiration date</S.Label>
					<InputFormLayout
						{...register("expirationDate")}
						id="expiration-date"
						placeholder="**/**"
						maxLength={4}
					/>
					<S.InputError text={errors.expirationDate?.message || ""} />
				</InputContainerFormLayout>
				<InputContainerFormLayout>
					<S.Label htmlFor="available-balance">Available Balance</S.Label>
					<InputFormLayout
						{...register("availableBalance")}
						id="available-balance"
						placeholder="0000.00"
					/>
					<S.InputError text={errors.expirationDate?.message || ""} />
				</InputContainerFormLayout>
				<S.SubmitButton type="submit" text="Save" />
			</S.Form>
		</S.FormOverlay>,
		document.getElementById("cardForm") as HTMLElement
	);
}

export default AddCardForm;
