import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import {
	Bar,
	BarChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface MonthlySummary {
	year: number;
	month: number;
	income: number;
	outcome: number;
	label: string;
}

function IncomeOutcomeBarChart() {
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);

	const summaryArray: MonthlySummary[] = [];

	for (const transaction of transactions) {
		const date = new Date(transaction.date);
		const month = date.getMonth();
		const year = date.getFullYear();

		const isExisting = summaryArray.find(
			(item) => item.month === month && item.year === year
		);

		if (isExisting) {
			if (transaction.transactionType === "income") {
				isExisting.income += transaction.amount;
			} else {
				isExisting.outcome += Math.abs(transaction.amount);
			}
		} else {
			summaryArray.push({
				year,
				month,
				income:
					transaction.transactionType === "income" ? transaction.amount : 0,
				outcome:
					transaction.transactionType === "outcome"
						? Math.abs(transaction.amount)
						: 0,
				label: new Date(year, month).toLocaleString("pl-PL", {
					month: "long",
					year: "numeric",
				}),
			});
		}
	}

	summaryArray.sort((a, b) =>
		a.year !== b.year ? a.year - b.year : a.month - b.month
	);

	const chartWidth = Math.max(summaryArray.length * 200, 400);

	return (
		<div style={{ width: "100%", overflow: "auto" }}>
			<ResponsiveContainer width={chartWidth} height={400}>
				<BarChart
					data={summaryArray}
					margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
				>
					<XAxis dataKey="label" />
					<YAxis />
					<Tooltip
						formatter={(value: number) => `${value.toFixed(2)} PLN`}
						labelFormatter={(label: string) => label}
					/>
					<Legend />
					<Bar dataKey="income" name="Dochody" fill="#82ca9d" />
					<Bar dataKey="outcome" name="Wydatki" fill="#ff8c69" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default IncomeOutcomeBarChart;
