import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		outline: 0;
	}

	:root{
		--color-primary: #D8FC7B;
		--color-primary-50: #C0E16E;
		--color-secondary: #00A9A1;
		--color-secondary-50: #00B1A8;
		--color-tertiary: #6D6D5F;
		--color-gray-100: #111111;
		--color-gray-50: #878787;
		--color-gray-20: #E0E0E0;
		--color-white: #F5F5F5;
		--color-black: #0C0D0D;
		--color-purple: #19162D;
		--color-negative: #E60000;
		--color-warning: #FFCD07;
		--color-sucess: #168821;
		--color-information:#155BCB; 
	}
`;
