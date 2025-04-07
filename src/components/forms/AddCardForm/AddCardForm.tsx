import { useForm } from "react-hook-form";
import * as S from "./AddCardForm.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCardSchema } from "./AddCardFormSchema";
import { useDispatch } from "react-redux";
import { cardData } from "../cardFormSlice";
import { useNavigate } from "react-router-dom";

interface AddCardFormTypes {
	creditCardNumber: string;
	cvcNumber: string;
	expirationDate: string;
}

function AddCardForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setValue,
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

	async function onSubmit(data: AddCardFormTypes) {
		try {
			const result = await dispatch(cardData(data));

			if (result.type === "card/cardData") {
				navigate("/cards");
			} else {
				console.log("Data transmitted incorrectly", data);
			}
		} catch (error) {
			console.error("An error occurred while logging in:", error);
		}
	}

	return (
		<S.Form onSubmit={handleSubmit(onSubmit)}>
			<S.InputContainer>
				<S.Label htmlFor="card-number">Number of your credit card</S.Label>
				<S.Input
					{...register("creditCardNumber")}
					id="card-number"
					placeholder="**** **** **** ****"
					maxLength={19}
					onChange={handleCardNumberFormatChange}
				/>
				<S.InputError text={errors.creditCardNumber?.message || ""} />
			</S.InputContainer>
			<S.InputContainer>
				<S.Label htmlFor="cvc-number">CVC number</S.Label>
				<S.Input
					{...register("cvcNumber")}
					id="cvc-number"
					placeholder="***"
					maxLength={3}
				/>
				<S.InputError text={errors.cvcNumber?.message || ""} />
			</S.InputContainer>
			<S.InputContainer>
				<S.Label htmlFor="expiration-date">Expiration date</S.Label>
				<S.Input
					{...register("expirationDate")}
					id="expiration-date"
					placeholder="**/**"
					maxLength={4}
				/>
				<S.InputError text={errors.expirationDate?.message || ""} />
			</S.InputContainer>
			<S.SubmitButton type="submit" text="Save" />
		</S.Form>
	);
}

export default AddCardForm;
