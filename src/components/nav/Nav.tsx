import styled from "styled-components";
import {routes} from "../../routes/routes";
import {NavLink} from "react-router-dom";

const Container = styled.nav`
	display: flex;
	column-gap: 60px;
	align-items: center;
	padding: 0 20px;
	margin-top: 37px;
`
const Link = styled.div<{active: boolean}>`
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
	
	${props => !props.active && `
		&:hover {
			background: rgba(24, 24, 24, 0.04);
			color: #181818;
		}
	`}
`

export const Nav = () => {
	return (
		<Container>
			{routes.map(route =>
				<NavLink to={route.path} key={route.path}>
					{({isActive}) => (
						<Link active={isActive}>
							{route.name}
						</Link>
					)}
				</NavLink>
			)}
		</Container>
	)
}