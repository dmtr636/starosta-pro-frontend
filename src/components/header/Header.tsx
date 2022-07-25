import styled from "styled-components";
import {HeaderButton} from "./HeaderButton";

const Container = styled.header`
	height: 116px;
	border-bottom: #181818 solid 2px;
	padding: 20px;
	display: flex;
	justify-content: start;
	align-items: center;
	column-gap: 20px;
`
const Logo = styled.div`
	width: 42px;
	height: 42px;
	background: #181818;
	border-radius: 50%;
`
const Slogan = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #181818;
	margin-right: auto;
`

export const Header = () => {
	return (
		<Container>
			<Logo/>
			<Slogan>
				ДИЗАЙН КРУГОМ
			</Slogan>
			<HeaderButton>
				ЗАКАЗАТЬ САЙТ У СТУДИИ ПОД КЛЮЧ
			</HeaderButton>
			<HeaderButton>
				НАПИСАТЬ МНЕ
			</HeaderButton>
		</Container>
	)
}