import * as S from "./SelectCardModal.styled";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import CardsForSelectModal from "../CardsForSelectModal";

type SelectCardModalTypes = {
	title: string;
	onOpen: () => void;
	onCancel: () => void;
	className?: string;
};

function SelectCardModal({
	onOpen,
	onCancel,
	title,
	className,
}: SelectCardModalTypes) {
	return ReactDOM.createPortal(
		<S.SelectCardModalOverlay onClick={onOpen} className={className}>
			<X onClick={onCancel} />
			<S.ModalContainer>
				<S.Title>{title}</S.Title>
				<CardsForSelectModal />
			</S.ModalContainer>
		</S.SelectCardModalOverlay>,
		document.getElementById("cardModal") as HTMLElement
	);
}

export default SelectCardModal;
