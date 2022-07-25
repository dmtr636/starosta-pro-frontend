export interface IRoute {
	path: string,
	name: string
}

export const routes: IRoute[] = [
	{
		path: "/",
		name: "ВСЕ"
	},
	{
		path: "/ux-ui",
		name: "UX / UI"
	},
	{
		path: "/graphics",
		name: "ГРАФИКА"
	},
	{
		path: "/identity",
		name: "АЙДЕНТИКА"
	},
	{
		path: "/3d",
		name: "3D"
	},
	{
		path: "illustrations",
		name: "ИЛЛЮСТРАЦИИ"
	}
]

