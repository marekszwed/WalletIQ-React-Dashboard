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

	const SummeryWidgetInfos: SummaryWidgetProps[] = [
		{ text: "Balance", icon: <WalletMinimal />, sum: availableBalance || "0000.00" },
		{ text: "Income", icon: <BanknoteArrowDown />, sum: "8450.66" },
		{ text: "Expenses", icon: <WalletMinimal />, sum: "2540.12" },
		{ text: "Savings", icon: <HandCoins />, sum: "2400" },
	];

	return (
		<S.Dashboard>
			<WidgetContainer>
				{SummeryWidgetInfos.map((info, index) => (
					<SummaryWidget
						key={index}
						text={info.text}
						icon={info.icon}
						sum={info.sum}
					></SummaryWidget>
				))}
			</WidgetContainer>
			<MyCard />
		</S.Dashboard>
	);
}

export default Dashboard;
