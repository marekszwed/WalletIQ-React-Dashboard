import ReactDOM from "react-dom";
import * as S from "./RemoveWarningPortal.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearData } from "../../forms/cardFormSlice";

type WarningPortalProps = {
	isOpen: boolean;
	onClose: () => void;
};

function RemoveWarningPortal({ isOpen, onClose }: WarningPortalProps) {
	const [isShow, setIsShow] = useState(false);

	const dispatch = useDispatch();
	const removeAllReduxDataAndLS = () => {
		localStorage.removeItem("cards");
		dispatch(clearData());
	};

	const handleClosePortal = () => {
		setIsShow(!isShow);
	};

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<S.WarningOverlay onClick={onClose}>
			<S.Container>
				<S.IconContainer>
					<S.Icon></S.Icon>
				</S.IconContainer>
				<S.AnnouncmentBox>
					<S.Title>Delete All</S.Title>
					<S.Announcment>
						This will permamently delete all card from your account
					</S.Announcment>
				</S.AnnouncmentBox>
				<S.ButtonContainer>
					<S.CancelButton onClick={handleClosePortal} text="Cancel" />
					<S.WarningButton onClick={removeAllReduxDataAndLS}>
						Delete
					</S.WarningButton>
				</S.ButtonContainer>
			</S.Container>
		</S.WarningOverlay>,
		document.getElementById("warningPortal") as HTMLElement
	);
}

export default RemoveWarningPortal;
