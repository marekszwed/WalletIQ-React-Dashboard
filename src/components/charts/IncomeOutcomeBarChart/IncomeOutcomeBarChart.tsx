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
import { chartConfig } from "../../../styles/chartConfig";
import { useMemo } from "react";

interface MonthlySummary {
	year: number;
	month: number;
	income: number;
	outcome: number;
	label: string;
}

const TransactionType = {
	income: "income",
	outcome: "outcome",
} as const;

function IncomeOutcomeBarChart() {
	const transactions = useSelector(
		(state: RootState) => state.transaction.transactions
	);

	const summaryArray: MonthlySummary[] = useMemo(() => {
		const summaryMap: Record<string, MonthlySummary> = {};

		for (const transaction of transactions) {
			const date = new Date(transaction.date);
			const month = date.getMonth();
			const year = date.getFullYear();
			const key = `${year}=${month}`;

			const isIncomeTransactionType =
				transaction.transactionType === TransactionType.income;
			const isOutcomeTransactionType =
				transaction.transactionType === TransactionType.outcome;

			const income = isIncomeTransactionType ? transaction.amount : 0;
			const outcome = isOutcomeTransactionType
				? Math.abs(transaction.amount)
				: 0;

			const label = date.toLocaleString("pl-PL", {
				month: "long",
				year: "numeric",
			});

			if (summaryMap[key]) {
				summaryMap[key].income += income;
				summaryMap[key].outcome += outcome;
			} else {
				summaryMap[key] = {
					year,
					month,
					income,
					outcome,
					label,
				};
			}
		}
		return Object.values(summaryMap).sort((a, b) =>
			a.year !== b.year ? a.year - b.year : a.month - b.month
		);
	}, [transactions]);

	const chartWidth = Math.max(summaryArray.length * 200, 400);

	return (
		<div style={{ width: "100%", overflow: "auto" }}>
			<ResponsiveContainer
				width={chartWidth}
				height={chartConfig.layout.height}
			>
				<BarChart data={summaryArray} margin={chartConfig.layout.margin}>
					<XAxis dataKey="label" />
					<YAxis />
					<Tooltip
						formatter={(value: number) => `${value.toFixed(2)} PLN`}
						labelFormatter={(label: string) => label}
					/>
					<Legend />
					<Bar
						dataKey="income"
						name="Dochody"
						fill={chartConfig.colors.general.income}
					/>
					<Bar
						dataKey="outcome"
						name="Wydatki"
						fill={chartConfig.colors.general.outcome}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default IncomeOutcomeBarChart;
