import {
	ResponsiveContainer,
	Pie,
	PieChart,
	Cell,
	Tooltip,
	Legend,
} from "recharts";

type PieChartLayoutCustomProps = {
	data: { name: string; value: number }[];
	colors: string[];
	showLegend: boolean;
	showTooltip: boolean;
};

function PieChartLayout({
	data,
	colors,
	showLegend,
	showTooltip,
}: PieChartLayoutCustomProps) {
	return (
		<ResponsiveContainer>
			<PieChart>
				<Pie
					data={data}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					innerRadius={55}
					outerRadius={80}
					paddingAngle={7}
					label
				>
					{data.map((_, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				{showTooltip && <Tooltip />}
				{showLegend && <Legend iconSize={16} height={50} />}
			</PieChart>
		</ResponsiveContainer>
	);
}

export default PieChartLayout;
