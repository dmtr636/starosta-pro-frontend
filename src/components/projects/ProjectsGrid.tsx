import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {projectStore} from "../../store/ProjectStore";
import {SERVER_HOST} from "../../constants/config";
import {device, media} from "../../constants/breakpoints";
import useWindowDimensions from "../../hooks/hooks";
import {Project} from "./Project";
import {categoryStore} from "../../store/CategoryStore";
import {IProject} from "../../interfaces/IProject";

const Container = styled.div`
	display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
	margin-top: 30px;

	${media.tablet} {
        grid-template-columns: repeat(3, 1fr);
	}
	${media.phone} {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const ProjectsGrid = observer(() => {
	const categoryId = categoryStore.currentCategory.id
	let projects = projectStore.getProjects(categoryId)
	const {width} = useWindowDimensions()

	if (width < device.tablet) {
		projects = projectStore.adaptImagesTo2Col(projects) as IProject[]
	} else if (width < device.desktop) {
		projects = projectStore.adaptImagesTo3Col(projects) as IProject[]
	}

	return (
		<Container>
			{projects.map(project =>
				<Project project={project}/>
			)}
		</Container>
	)
})