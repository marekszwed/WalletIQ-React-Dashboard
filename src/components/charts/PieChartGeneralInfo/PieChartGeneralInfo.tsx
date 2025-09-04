import * as S from "./PieChartGeneralInfo.styled";
import { RootState } from "../../../Store/store";
import { useSelector } from "react-redux";
import PieChartLayout from "../../Layout/PieChartLayout";
import { chartConfig } from "../../../styles/chartConfig";

interface DataForChart {
	name: string;
	value: number;
}

function PieChartGeneralInfo() {
	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);

	const budget = useSelector((state: RootState) => state.budget);
	const cardBudget = selectedCard ? budget[selectedCard.id] : null;

	if (!cardBudget) return null;

	const totalBalance = cardBudget ? cardBudget.balance : 0;
	const totalOutcome = cardBudget ? Math.abs(cardBudget.outcome) : 0;

	const dataForChart: DataForChart[] = [
		{ name: "Balance", value: totalBalance },
		{ name: "Outcome", value: totalOutcome },
	];

	return (
		<S.Container>
			<PieChartLayout
				data={dataForChart}
				colors={Object.values(chartConfig.colors.general)}
				showLegend
				showTooltip
			/>
		</S.Container>
	);
}

export default PieChartGeneralInfo;
