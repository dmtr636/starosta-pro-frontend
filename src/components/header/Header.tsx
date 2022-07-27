import styled from "styled-components";
import {HeaderLink} from "./HeaderLink";
import useWindowDimensions from "../../hooks/hooks";
import {device} from "../../constants/breakpoints";
import {HeaderBurger} from "./HeaderBurger";
import {useState} from "react";
import {HeaderMenu} from "./HeaderMenu";

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
	const {width} = useWindowDimensions()
	const [showMenu, setShowMenu] = useState(false)

	const onBurgerClick = () => {
		setShowMenu(true)
		document.body.style.overflow = "hidden"
	}
	const onClickOutsideMenu = () => {
		setShowMenu(false)
		document.body.style.overflow = ""
	}
	const Links = () => {
		return (
			<>
				<HeaderLink href={"http://kodim.studio"}>
					ЗАКАЗАТЬ САЙТ У СТУДИИ ПОД КЛЮЧ
				</HeaderLink>
				<HeaderLink href={"https://t.me/starostakirill"}>
					НАПИСАТЬ МНЕ
				</HeaderLink>
			</>
		)
	}

	return (
		<Container>
			<Logo/>
			<Slogan>
				ДИЗАЙН КРУГОМ
			</Slogan>
			{width >= device.desktop
				?
				<Links/>
				:
				<>
					<HeaderBurger onClick={onBurgerClick}/>
					{showMenu &&
                        <HeaderMenu onClickOutside={onClickOutsideMenu}>
                            <Links/>
                        </HeaderMenu>
					}
				</>
			}
		</Container>
	)
}