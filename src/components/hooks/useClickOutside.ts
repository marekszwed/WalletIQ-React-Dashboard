import { useEffect } from "react";

type ClickOutsideHookTypes = {
	ref: React.RefObject<HTMLElement | null>;
	onClickOutside: () => void;
};

export const useClickOutside = ({
	ref,
	onClickOutside,
}: ClickOutsideHookTypes) => {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickOutside();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, onClickOutside]);
};
