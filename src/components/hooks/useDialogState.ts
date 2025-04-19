import { useState } from "react";

export const useDialogState = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return { isOpen, setIsOpen, toggleOpen };
};
