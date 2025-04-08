import * as S from "./InputFormLayout.styled";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function InputFormLayout(props: InputProps) {
	return <S.Input {...props} />;
}

export default InputFormLayout;
