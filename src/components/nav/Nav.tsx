import styled from "styled-components";
import {NavLink, useLocation} from "react-router-dom";
import {categoryStore} from "../../store/CategoryStore";
import {observer} from "mobx-react-lite";
import {media} from "../../constants/breakpoints";
import {useEffect, useRef} from "react";

const Container = styled.nav`
    display: flex;
    column-gap: 60px;
    align-items: center;
	justify-content: center;
    margin-top: 30px;
	
	&::-webkit-scrollbar {
		display: none;
	}
    -ms-overflow-style: none;
    scrollbar-width: none;

    ${media.tablet} {
        overflow: auto;
    }
    ${media.phone} {
        column-gap: 17px;
    }
`
const Link = styled.div<{ active: boolean }>`
    background: ${props => props.active ? '#FFFFFF' : '#111111'};
    color: ${props => props.active ? '#111111' : '#FFFFFF'};
    padding: 6px 16px;
	
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.06em;
	
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
	const location = useLocation()

	useEffect(() => {
		setTimeout(() => {
			// @ts-ignore
			ref.current!.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
		}, 50)
	}, [location])

	return (
		<Container>
			{categoryStore.categories.map(category =>
				<NavLink
					to={`/${category.path}`}
					key={category.path}
				>
					{({isActive}) => (
						<Link
							active={isActive}
							ref={isActive ? ref : null}
						>
							{category.name}
						</Link>
					)}
				</NavLink>
			)}
		</Container>
	)
})