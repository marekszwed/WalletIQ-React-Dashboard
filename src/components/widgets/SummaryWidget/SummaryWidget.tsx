import { ReactNode } from "react";
import * as S from "./SummaryWidget.styled";

export type SummaryWidgetProps = {
	text: string;
	icon: ReactNode;
	sum: string;
};

function SummaryWidget({ text, icon, sum }: SummaryWidgetProps) {
	return (
		<S.Widget>
			<S.Container>
				<S.Icon>{icon}</S.Icon>
				<S.Text>{text}</S.Text>
				<S.Summary>{sum}</S.Summary>
			</S.Container>
		</S.Widget>
	);
}

export default SummaryWidget;
