import * as S from "./InputFormLayout.styled";

type InputProps = React.ComponentProps<"input">;

function InputFormLayout(props: InputProps) {
	return <S.Input {...props} />;
}

export default InputFormLayout;
