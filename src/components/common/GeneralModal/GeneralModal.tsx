import * as S from "./GeneralModal.styled";
import { ReactNode } from "react";
import ReactDOM from "react-dom";

type GeneralModalType = {
	onClick?: () => void;
	children?: ReactNode;
};

function GeneralModal({ onClick, children }: GeneralModalType) {
	return ReactDOM.createPortal(
		<S.GeneralOverlay onClick={onClick}>{children}</S.GeneralOverlay>,
		document.getElementById("generalModal") as HTMLElement
	);
}

export default GeneralModal;
