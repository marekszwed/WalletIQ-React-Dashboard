import * as S from "./CustomError.styled";

interface ErrorProps {
	text: string;
	className?: string;
}

function CustomError({ text, className }: ErrorProps) {
	const inputProps = { className };
	return <S.CustomError {...inputProps}>{text}</S.CustomError>;
}

export default CustomError;
