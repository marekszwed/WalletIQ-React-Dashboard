import { BanknoteArrowDown, HandCoins, WalletMinimal } from "lucide-react";
import { MyCard, SummaryWidget } from "../../components";
import WidgetContainer from "../../components/widgets/WidgetContainer";
import * as S from "./Dashboard.styled";
import { SummaryWidgetProps } from "../../components/widgets/SummaryWidget/SummaryWidget";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

function Dashboard() {
	const selectedCard = useSelector(
		(state: RootState) => state.card.selectedCard
	);

	const availableBalance = selectedCard?.availableBalance;

	const summaryWidgetInfos: SummaryWidgetProps[] = [
		{ text: "Balance", icon: <WalletMinimal />, amount: availableBalance || "0000.00" },
		{ text: "Income", icon: <BanknoteArrowDown />, amount: "8450.66" },
		{ text: "Expenses", icon: <WalletMinimal />, amount: "2540.12" },
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
