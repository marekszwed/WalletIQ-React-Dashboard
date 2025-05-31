import Modal from "../../common/Modal";
import ModalIcon from "../ModalIcon";

type ConfirmationModal = {
	title: string;
	description: string;
	onClose: () => void;
	onCancel?: () => void;
	onConfirm?: () => void;
};

function ConfirmationModal({
	title,
	description,
	onClose,
	onCancel,
	onConfirm,
}: ConfirmationModal) {
	return (
		<Modal
			title={title}
			description={description}
			children={<ModalIcon />}
			onClose={onClose}
			onCancel={onCancel}
			onConfirm={onConfirm}
		/>
	);
}

export default ConfirmationModal;
