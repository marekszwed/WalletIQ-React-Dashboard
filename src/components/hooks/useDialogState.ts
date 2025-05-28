import { useState } from "react";

export const useDialogState = () => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return { isOpen, setIsOpen, toggle, open, close };
};
