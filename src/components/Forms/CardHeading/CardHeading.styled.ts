import styled from "styled-components";
import HeaderButton from "../../common/HeaderButton";

export const CardHeader = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: ${({ theme }) => theme.border.b_1};
	width: 100%;
	margin-bottom: ${({ theme }) => theme.margin.m1};
`;
export const CardTitle = styled.h2`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f_h2};
	margin-top: ${({ theme }) => theme.margin.m1};
	margin-bottom: ${({ theme }) => theme.margin.m_5};
	padding-inline: auto;
`;

export const CardDescription = styled.p`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.f_normal};
	margin-top: 0;
`;

export const CardButtonContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 1rem;
	background-color: ${({ theme }) => theme.primaryColors.white200};
	border-radius: ${({ theme }) => theme.border.b1};
`;

export const CardButton = styled(HeaderButton)`
	max-width: 16rem;
	width: 100%;
	margin: ${({ theme }) => theme.margin.m_5};
	padding: ${({ theme }) => `${theme.padding.p_8} ${theme.padding.p2_4}`};
	background-color: ${({ theme }) => theme.primaryColors.white100};
	color: ${({ theme }) => theme.primaryColors.black};

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.primaryColors.hover.blue};
		color: ${({ theme }) => theme.primaryColors.white};
	}
`;
