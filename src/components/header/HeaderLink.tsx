import styled from "styled-components";
import {ReactNode} from "react";

const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #181818;
	padding: 10px 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    color: #FFFFFF;

    @media (hover: hover) {
        &:hover {
            background: rgba(24, 24, 24, 0.04);
            color: #181818;
        }
    }
`

export const HeaderLink = (props: {children: ReactNode, href: string}) => {
	return (
		<Link href={props.href} target="_blank">
			{props.children}
		</Link>
	)
}