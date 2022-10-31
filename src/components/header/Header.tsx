import styled from "styled-components";
import useWindowDimensions from "../../hooks/hooks";
import {device} from "../../constants/breakpoints";
import React, {useEffect, useState} from "react";
import mail from "../../assets/Mail.svg"
import telegram from "../../assets/Telegram.svg"

const Container = styled.header`
    height: 103px;
    border-bottom: 3px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
	position: relative;
`
const Title = styled.div`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 34px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
`
const Links = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	column-gap: 30px;
	margin-left: auto;
`
const Link = styled.a`
	opacity: 0.7;
	
	&:hover {
		opacity: 1;
	}
`

export const Header = () => {
	const {width} = useWindowDimensions()
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		if (width >= device.desktop) {
			document.body.style.overflow = ""
		}
	}, [width])

	const onBurgerClick = () => {
		setShowMenu(true)
		document.body.style.overflow = "hidden"
	}
	const onClickOutsideMenu = () => {
		setShowMenu(false)
		document.body.style.overflow = ""
	}

	return (
		<Container>
			<Title>STAROSTA KIRILL</Title>
			<Links>
				<Link href={"mailto:starosta-2000@mail.ru"} target={"_blank"}>
					<img src={mail} alt={""}/>
				</Link>
				<Link href={"https://t.me/starostakirill"} target={"_blank"}>
					<img src={telegram} alt={""}/>
				</Link>
			</Links>
		</Container>
	)
}