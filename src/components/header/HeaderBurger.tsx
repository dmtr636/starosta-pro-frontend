export const HeaderBurger = (props: {onClick: () => void}) => {
	return (
		<button onClick={props.onClick}>
			<svg xmlns="http://www.w3.org/2000/svg" width="52" height="42" viewBox="0 0 52 42" fill="none">
				<rect width="52" height="8" fill="#181818"/>
				<rect y="17" width="52" height="8" fill="#181818"/>
				<rect y="34" width="52" height="8" fill="#181818"/>
			</svg>
		</button>
	)
}