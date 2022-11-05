import styled from "styled-components";
import React, {ReactNode} from "react";
import {media} from "../../constants/breakpoints";
import close from "../../assets/Close.svg"
import mail from "../../assets/MailLg.svg";
import telegram from "../../assets/TelegramLg.svg";

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    background: #111111;
	z-index: 10;
`
const CloseButton = styled.div`
	position: absolute;
	top: 37px;
	right: 20px;
`
const Links = styled.div`
	position: absolute;
	bottom: 40px;
	width: 100%;
	display: flex;
	justify-content: center;
	column-gap: 40px;
`
const Link = styled.a`
	opacity: 0.7;
	
	&:hover {
		opacity: 1;
	}
`

export const HeaderMenu = (props: {onClose: () => void; children: ReactNode}) => {
	return (
		<Background>
			<CloseButton onClick={props.onClose}>
				<img src={close} />
			</CloseButton>
			<Links>
				<Link href={"mailto:starosta-2000@mail.ru"} target={"_blank"}>
					<img src={mail} alt={""}/>
				</Link>
				<Link href={"https://t.me/starostakirill"} target={"_blank"}>
					<img src={telegram} alt={""}/>
				</Link>
			</Links>
		</Background>
	)
}