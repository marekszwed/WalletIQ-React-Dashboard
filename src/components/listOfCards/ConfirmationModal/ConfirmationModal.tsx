import Modal from "../../common/Modal";
import ModalIcon from "../ModalIcon";

type ConfrimationModal = {
	onOpen: () => void;
	onCancel?: () => void;
	onConfirm?: () => void;
};

function ConfrimationModal({ onOpen, onCancel, onConfirm }: ConfrimationModal) {
	return (
		<Modal
			title="Delete All"
			description="This will permamently delete all card from your account"
			children={<ModalIcon />}
			onOpen={onOpen}
			onCancel={onCancel}
			onConfirm={onConfirm}
		/>
	);
}

export default ConfrimationModal;
