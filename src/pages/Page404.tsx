import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
	align-items: center;
    background: #111111;
`
const Text404 = styled.div`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 202px;
    line-height: 299px;
    color: #FFFFFF;
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin-left: 60px;
`
const ColumnText = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 55px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
`
const Button = styled.button`
    background: #FFFFFF;
    padding: 6px 16px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.06em;
    color: #111111;
	margin-top: 30px;
	
	&:hover {
        background: #EBEBEB;
	}
`

export const Page404 = () => {
	const navigate = useNavigate()

	return (
		<Container>
			<Text404>404</Text404>
			<Column>
				<ColumnText>УВЫ...<br/>Такой страницы нет.</ColumnText>
				<Button onClick={() => navigate("/")}>СТРАНИЦА, КОТОРАЯ ЕСТЬ</Button>
			</Column>
		</Container>
	)
}