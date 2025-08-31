import * as S from "./PieChartCategoryInfo.styled";
import { theme } from "../../../styles/theme";
import PieChartLayout from "../../Layout/PieChartLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";

interface DataForChart {
	name: string;
	value: number;
}

function PieChartCategoryInfo() {
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);
	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);

	if (!selectedCard) return null;

	const outcomes = transactions.filter(
		(t) => t.transactionType === "outcome" && t.cardId === selectedCard.id
	);

	const data: DataForChart[] = [];

	for (const outcome of outcomes) {
		const value = Math.abs(Number(outcome.amount));
		const exists = data.find((item) => item.name === outcome.category);
		if (exists) {
			exists.value += value;
		} else {
			data.push({ name: outcome.category, value: value });
		}
	}

	const colors = [
		theme.primaryColors.charts.blue,
		theme.primaryColors.charts.green,
		theme.primaryColors.charts.orange,
		theme.primaryColors.charts.pink,
		theme.primaryColors.charts.red500,
		theme.primaryColors.charts.yellow,
		theme.primaryColors.charts.blue800,
		theme.primaryColors.charts.sky,
		theme.primaryColors.charts.sand,
	];

	return (
		<S.Container>
			<PieChartLayout
				data={data}
				colors={colors}
				showLegend={true}
				showTooltip={true}
			></PieChartLayout>
		</S.Container>
	);
}

export default PieChartCategoryInfo;
