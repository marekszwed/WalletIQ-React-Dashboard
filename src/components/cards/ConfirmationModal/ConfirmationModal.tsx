import Modal from "../../common/Modal";
import ModalIcon from "../ModalIcon";

type ConfirmationModal = {
	title: string;
	description: string;
	onOpen: () => void;
	onCancel?: () => void;
	onConfirm?: () => void;
};

function ConfirmationModal({
	title,
	description,
	onOpen,
	onCancel,
	onConfirm,
}: ConfirmationModal) {
	return (
		<Modal
			title={title}
			description={description}
			children={<ModalIcon />}
			onOpen={onOpen}
			onCancel={onCancel}
			onConfirm={onConfirm}
		/>
	);
}

export default ConfirmationModal;
