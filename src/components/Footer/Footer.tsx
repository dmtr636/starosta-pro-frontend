import styled from "styled-components";

const Container = styled.footer`
    padding: 33px;
	margin-top: auto;
	display: flex;
	justify-content: center;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 34px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
`

export const Footer = () => {
	return (
		<Container>
			FOOTER
		</Container>
	)
}