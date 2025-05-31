import { ReactNode } from "react";
import * as S from "./WidgetContainer.styled";

type WidgetContainerProps = {
	children: ReactNode;
};

function WidgetContainer({ children }: WidgetContainerProps) {
	return <S.Box>{children}</S.Box>;
}

export default WidgetContainer;
