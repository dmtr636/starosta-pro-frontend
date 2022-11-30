import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {categoryStore} from "../../store/CategoryStore";
import {observer} from "mobx-react-lite";
import {device, media} from "../../constants/breakpoints";
import {useEffect, useRef} from "react";
import {ICategory} from "../../interfaces/ICategory";
import useWindowDimensions from "../../hooks/hooks";

const Container = styled.nav`
    display: flex;
    column-gap: 60px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
	padding: 0 20px;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ${media.tablet} {
        overflow: auto;
        justify-content: start;
    }

    ${media.phone} {
        column-gap: 20px;
    }
`
const Link = styled.button<{ active: boolean }>`
    background: ${props => props.active ? '#FFFFFF' : '#111111'};
    color: ${props => props.active ? '#111111' : '#FFFFFF'};
    padding: 6px 16px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.06em;
	white-space: nowrap;
	
    @media (hover: hover) {
        ${props => !props.active && `
			&:hover {
				background: #2B2B2B;
				color: #FFFFFF;
			}
		`}
    }
`

export const Nav = observer(() => {
	const ref = useRef(null)
	const {width} = useWindowDimensions()

	useEffect(() => {
		if (width < device.desktop) {
			setTimeout(() => {
				// @ts-ignore
				ref.current!.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'})
			}, 50)
		}
	}, [categoryStore.currentCategory])

	const isActive = (category: ICategory) => {
		return category.id === categoryStore.currentCategory.id
	}

	return (
		<Container>
			{categoryStore.categories.map(category =>
				<Link
					active={isActive(category)}
					ref={isActive(category) ? ref : null}
					key={category.id}
					onClick={() => categoryStore.setCurrentCategory(category)}
				>
					{category.name}
				</Link>
			)}
		</Container>
	)
})