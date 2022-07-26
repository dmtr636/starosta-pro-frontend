import styled from "styled-components";

const Container = styled.header`
    height: 116px;
	background: #181818;
    padding: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 20px;
	margin-top: auto;
`
const Logo = styled.div`
    width: 42px;
    height: 42px;
    background: white;
    border-radius: 50%;
`
const Text = styled.div<{last?: boolean}>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: white;
	
	${props => props.last && `
		margin-left: auto;	
	`}
`

export const Footer = () => {
	return (
		<Container>
			<Logo/>
			<Text>
				КРУГОМ ДИЗАЙН
			</Text>
			<Text last={true}>
				2022
			</Text>
		</Container>
	)
}