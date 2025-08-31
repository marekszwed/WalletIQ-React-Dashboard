import * as S from "./PieChartGeneralInfo.styled";
// import { Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

import { RootState } from "../../../Store/store";
import { useSelector } from "react-redux";
import { theme } from "../../../styles/theme";
import PieChartLayout from "../../Layout/PieChartLayout";

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

	const totalBalance = cardBudget ? cardBudget.balance : 0;
	const totalOutcome = cardBudget ? Math.abs(cardBudget.outcome) : 0;

	if (!cardBudget) return null;

	const dataForChart: DataForChart[] = [
		{ name: "Balance", value: totalBalance },
		{ name: "Outcome", value: totalOutcome },
	];

	const colors = [
		theme.primaryColors.charts.green,
		theme.primaryColors.charts.orange,
	];

	return (
		<S.Container>
			<PieChartLayout
				data={dataForChart}
				colors={colors}
				showLegend={true}
				showTooltip={true}
			/>
		</S.Container>
	);
}

export default PieChartGeneralInfo;
