import styled from "styled-components";

export const Dashboard = styled.div`
	position: relative;
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-template-areas:
		". . . . card"
		". . . . card"
		". . . . .";

	background-color: ${({ theme }) => theme.primaryColors.white100};
`;
