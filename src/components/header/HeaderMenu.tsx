import styled from "styled-components";
import {ReactNode} from "react";
import {media} from "../../constants/breakpoints";

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    background: rgba(24, 24, 24, 0.7);
`
const Container = styled.div`
    width: 473px;
    height: 178px;
	position: absolute;
	top: 37px;
	right: 20px;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	row-gap: 20px;
	padding: 0 20px;
	
	${media.phone} {
		width: auto;
		left: 39px;
		padding: 37px 20px;
		height: auto;
	}
`

export const HeaderMenu = (props: {onClickOutside: () => void; children: ReactNode}) => {
	return (
		<Background onClick={props.onClickOutside}>
			<Container onClick={(event) => event.stopPropagation()}>
				{props.children}
			</Container>
		</Background>
	)
}