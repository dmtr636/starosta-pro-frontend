import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {projectStore} from "../../store/ProjectStore";
import {device, media} from "../../constants/breakpoints";
import useWindowDimensions from "../../hooks/hooks";
import {Project} from "./Project";
import {IProject} from "../../interfaces/IProject";
import {ICategory} from "../../interfaces/ICategory";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
	padding: 0 20px;

    ${media.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ProjectsGrid = observer((props: { category: ICategory }) => {
	let projects = projectStore.getProjects(props.category.id)
	const {width} = useWindowDimensions()

	if (width < device.desktop) {
		projects = projectStore.adaptImagesTo2Col(projects) as IProject[]
	}

	return (
		<Container>
			{projects.map(project =>
				<Project project={project}/>
			)}
		</Container>
	)
})