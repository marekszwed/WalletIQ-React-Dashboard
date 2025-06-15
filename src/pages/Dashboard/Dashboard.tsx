import { BanknoteArrowDown, HandCoins, WalletMinimal } from "lucide-react";
import { MyCard, SummaryWidget } from "../../components";
import WidgetContainer from "../../components/widgets/WidgetContainer";
import * as S from "./Dashboard.styled";
import { SummaryWidgetProps } from "../../components/widgets/SummaryWidget/SummaryWidget";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { updategCardBudget } from "../../components/slices/BudgetSlice";
import { useEffect } from "react";

function Dashboard() {
	const dispatch = useDispatch();
	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);

	const budget = useSelector((state: RootState) => state.budget);

	useEffect(() => {
		if (selectedCard && !budget[selectedCard.id]) {
			dispatch(
				updategCardBudget({
					cardId: selectedCard.id,
					availableBalance: parseFloat(selectedCard.availableBalance),
				})
			);
		}
	}, [selectedCard, budget, dispatch]);

	const cardBudget = selectedCard ? budget[selectedCard.id] : null;

	const summaryWidgetInfos: SummaryWidgetProps[] = [
		{
			text: "Balance",
			icon: <WalletMinimal />,
			amount: cardBudget ? cardBudget.balance.toFixed(2) : "0.00",
		},
		{
			text: "Income",
			icon: <BanknoteArrowDown />,
			amount: cardBudget ? cardBudget.income.toFixed(2) : "0.00",
		},
		{
			text: "Expenses",
			icon: <WalletMinimal />,
			amount: cardBudget ? cardBudget.outcome.toFixed(2) : "0.00",
		},
		{ text: "Savings", icon: <HandCoins />, amount: "2400" },
	];

	return (
		<S.Dashboard>
			<WidgetContainer>
				{summaryWidgetInfos.map((info, index) => (
					<SummaryWidget
						key={index}
						text={info.text}
						icon={info.icon}
						amount={info.amount}
					/>
				))}
			</WidgetContainer>
			<MyCard />
		</S.Dashboard>
	);
}

export default Dashboard;
