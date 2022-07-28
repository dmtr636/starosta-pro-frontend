import styled from "styled-components";
import {NavLink, useLocation} from "react-router-dom";
import {categoryStore} from "../../store/CategoryStore";
import {observer} from "mobx-react-lite";
import {media} from "../../constants/breakpoints";
import {useEffect, useRef} from "react";
import {ICategory} from "../../interfaces/ICategory";

const Container = styled.nav`
    display: flex;
    column-gap: 60px;
    align-items: center;
    padding: 0 20px;
    margin-top: 37px;
	
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
    background: ${props => props.active ? '#181818' : '#FFFFFF'};
    color: ${props => props.active ? '#FFFFFF' : '#181818'};
    padding: 0 10px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.07em;
	white-space: nowrap;
	
	@media (hover: hover) {
        ${props => !props.active && `
			&:hover {
				background: rgba(24, 24, 24, 0.04);
				color: #181818;
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