import styled from "styled-components";
import {ReactNode} from "react";

const Button = styled.button`
	height: 42px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #181818;
	padding: 0 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #FFFFFF;
	
	&:hover {
        background: rgba(24, 24, 24, 0.04);
		color: #181818;
	}
`

export const HeaderButton = (props: {children: ReactNode}) => {
	return (
		<Button>
			{props.children}
		</Button>
	)
}