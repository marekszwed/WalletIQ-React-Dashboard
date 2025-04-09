import { useForm } from "react-hook-form";
import * as S from "./AddCardForm.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCardSchema } from "./AddCardFormSchema";
import { useDispatch } from "react-redux";
import { cardData } from "../cardFormSlice";
import { useNavigate } from "react-router-dom";
import LabelFormLayout from "../../Layout/LabelFormLayout";
import InputFormLayout from "../../Layout/InputFormLayout";
import InputContainerFormLayout from "../../Layout/InputContainerFormLayout";

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
			<InputContainerFormLayout>
				<LabelFormLayout htmlFor="card-number">
					Number of your credit card
				</LabelFormLayout>
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
				<LabelFormLayout htmlFor="cvc-number">CVC number</LabelFormLayout>
				<InputFormLayout
					{...register("cvcNumber")}
					id="cvc-number"
					placeholder="***"
					maxLength={3}
				/>
				<S.InputError text={errors.cvcNumber?.message || ""} />
			</InputContainerFormLayout>
			<InputContainerFormLayout>
				<LabelFormLayout htmlFor="expiration-date">
					Expiration date
				</LabelFormLayout>
				<InputFormLayout
					{...register("expirationDate")}
					id="expiration-date"
					placeholder="**/**"
					maxLength={4}
				/>
				<S.InputError text={errors.expirationDate?.message || ""} />
			</InputContainerFormLayout>
			<S.SubmitButton type="submit" text="Save" />
		</S.Form>
	);
}

export default AddCardForm;
