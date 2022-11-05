import styled from "styled-components";
import {useState} from "react";
import {media} from "../../constants/breakpoints";

const Container = styled.div`
    position: fixed;
    bottom: 0;
	left: 0;
    width: 100%;
    height: 96px;
    background: #FFFFFF;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 20px;
	
	${media.phone} {
        height: auto;
		flex-direction: column;
		justify-content: start;
		align-items: start;
		row-gap: 20px;
		padding: 20px 20px 37px 20px;
	}
`
const Text = styled.div`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.07em;
    color: #111111;
`
const Button = styled.button`
	background: #111111;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: white;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 42px;
	
	@media (hover: hover) {
        &:hover {
            opacity: 0.85;
        }
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
                        Внимание! Спасибо. Этот сайт использует cookies.
					</Text>
					<Button onClick={handleCLick}>
						OK
					</Button>
                </Container>
			}
		</>
	)
}