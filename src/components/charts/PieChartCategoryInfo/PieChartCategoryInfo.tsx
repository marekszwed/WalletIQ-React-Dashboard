import * as S from "./PieChartCategoryInfo.styled";
import PieChartLayout from "../../Layout/PieChartLayout";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { chartConfig } from "../../../styles/chartConfig";
import { useMemo } from "react";

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

	const data: DataForChart[] = useMemo(() => {
		if (!selectedCard) return [];

		return transactions
			.filter(
				(t) => t.transactionType === "outcome" && t.cardId === selectedCard.id
			)
			.reduce<DataForChart[]>((acc, outcome) => {
				const value = Math.abs(Number(outcome.amount));
				const existing = acc.find((item) => item.name === outcome.category);

				if (existing) {
					existing.value += value;
				} else {
					acc.push({ name: outcome.category, value });
				}

				return acc;
			}, []);
	}, [transactions, selectedCard]);

	return (
		<S.Container>
			<PieChartLayout
				data={data}
				colors={Object.values(chartConfig.colors.categoryPieChart)}
				showLegend
				showTooltip
			/>
		</S.Container>
	);
}

export default PieChartCategoryInfo;
