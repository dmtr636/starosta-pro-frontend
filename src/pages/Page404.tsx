import styled from "styled-components";

const Text = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 128px;
    line-height: 156px;
    letter-spacing: 0.07em;
    color: #181818;
`

export const Page404 = () => {
	return (
		<Text>
			404
		</Text>
	)
}