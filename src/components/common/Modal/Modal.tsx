import { ReactNode } from "react";
import * as S from "./Modal.styled";
import ReactDOM from "react-dom";

type ModalProps = {
	onOpen: () => void;
	onCancel?: () => void;
	onConfirm?: () => void;
	title: string;
	description?: string;
	children?: ReactNode;
	className?: string;
};

function Modal({
	onOpen,
	title,
	description,
	children,
	onCancel,
	onConfirm,
	className,
}: ModalProps) {
	return ReactDOM.createPortal(
		<S.ModalOverlay onClick={onOpen} className={className}>
			<S.ModalContainer>
				{children}
				<S.AnnouncmentBox>
					<S.Title>{title}</S.Title>
					{description && <S.Description>{description}</S.Description>}
				</S.AnnouncmentBox>
				{(onCancel || onConfirm) && (
					<S.ButtonContainer>
						{onCancel && <S.CancelButton onClick={onCancel} text="Cancel" />}
						{onConfirm && (
							<S.WarningButton onClick={onConfirm}>Delete</S.WarningButton>
						)}
					</S.ButtonContainer>
				)}
			</S.ModalContainer>
		</S.ModalOverlay>,
		document.getElementById("modal") as HTMLElement
	);
}

export default Modal;
