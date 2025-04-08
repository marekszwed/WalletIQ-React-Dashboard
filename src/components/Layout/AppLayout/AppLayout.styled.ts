import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
`;

export const Main = styled.main<{ $show: boolean }>`
	flex: 1;
	padding-top: ${({ theme }) => theme.padding.p7};
	padding-left: ${({ $show, theme }) => ($show ? 0 : `${theme.padding.p7}`)};
`;
