import styled from "styled-components";
import {useState} from "react";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 96px;
    background: #181818;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Text = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.07em;
    color: #FFFFFF;
`
const Button = styled.button`
	background: white;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #181818;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 42px;
	
	&:hover {
		background: #181818;
		color: white;
	}
`

export const Cookie = () => {
	const [showCookie, setShowCookie] = useState((localStorage.getItem("showCookie") ?? "true") === "true")

	const handleCLick = () => {
		setShowCookie(false)
		localStorage.setItem("showCookie", "false")
	}

	return (
		<>
			{showCookie &&
                <Container>
					<Text>
                        Этот сайт использует cookies, впрочем, как и любой другой сайт в мире.
					</Text>
					<Button onClick={handleCLick}>
						OK
					</Button>
                </Container>
			}
		</>
	)
}