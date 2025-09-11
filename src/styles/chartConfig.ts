export const chartConfig = {
	colors: {
		general: {
			income: "#82ca9d",
			outcome: "#ff8c69",
		},
		categoryPieChart: {
			green: "#00C49F",
			orange: "#FF8042",
			blue: "#5d9aff",
			pink: "#bd5a91",
			sky: "#aea3f9",
			red500: "#ff6e80",
			yellow: "#acfa70",
			blue800: "#32315b",
			sand: "#d2d389",
		},
	},
	label: {
		barChart: {},
		income: "charts.income",
		outcome: "charts.outcome",
	},
	layout: {
		height: 400,
		margin: { top: 20, right: 30, left: 0, bottom: 5 },
	},
} as const;
