import * as S from "./SelectCardModal.styled";
import { X } from "lucide-react";
import CardsForSelectModal from "../CardsForSelectModal";
import GeneralModal from "../../common/GeneralModal";

type SelectCardModalTypes = {
	title: string;
	onOpen: () => void;
	onCancel: () => void;
};

function SelectCardModal({ onOpen, onCancel, title }: SelectCardModalTypes) {
	return (
		<GeneralModal onClick={onOpen}>
			<X onClick={onCancel} />
			<S.ModalContainer>
				<S.Title>{title}</S.Title>
				<CardsForSelectModal />
			</S.ModalContainer>
		</GeneralModal>
	);
}

export default SelectCardModal;
