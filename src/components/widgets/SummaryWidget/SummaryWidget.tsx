import { ReactNode } from "react";
import * as S from "./SummaryWidget.styled";

export type SummaryWidgetProps = {
	text: string;
	icon: ReactNode;
	amount: string;
};

function SummaryWidget({ text, icon, amount }: SummaryWidgetProps) {
	return (
		<S.Widget>
			<S.Container>
				<S.Icon>{icon}</S.Icon>
				<S.Text>{text}</S.Text>
				<S.Summary>{amount}</S.Summary>
			</S.Container>
		</S.Widget>
	);
}

export default SummaryWidget;
