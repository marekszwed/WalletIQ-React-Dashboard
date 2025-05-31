import { AddCardForm, CardsList, ConfirmationModal } from "../../components";
import * as S from "./Cards.styled";
import { useDispatch } from "react-redux";
import { clearData } from "../../components/forms/cardFormSlice";
import { useDialogState } from "../../components/hooks/useDialogState";

function Cards() {
	const dispatch = useDispatch();

	const addCardModalState = useDialogState();
	const addConfirmModalState = useDialogState();

	const removeAllReduxDataAndLS = () => {
		localStorage.removeItem("cards");
		dispatch(clearData());
	};

	return (
		<S.Cards>
			<CardsList
				onAddCardClick={addCardModalState.open}
				onShowModal={addConfirmModalState.open}
			/>
			<AddCardForm
				isOpen={addCardModalState.isOpen}
				onClose={addCardModalState.close}
			/>
			{addConfirmModalState.isOpen && (
				<ConfirmationModal
					title="Delete All"
					description="This will permamently delete all card from your account"
					onClose={addConfirmModalState.close}
					onCancel={addCardModalState.close}
					onConfirm={removeAllReduxDataAndLS}
				/>
			)}
		</S.Cards>
	);
}

export default Cards;
