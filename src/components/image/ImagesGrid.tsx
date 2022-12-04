import styled from "styled-components";
import {observer} from "mobx-react-lite"
import {projectStore} from "../../store/ProjectStore";
import {device, media} from "../../constants/breakpoints";
import useWindowDimensions from "../../hooks/hooks";
import {Image} from "./Image";

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

export const ImagesGrid = observer((props: { projectId: number }) => {
	let images = projectStore.getAdditionalImages(props.projectId) ?? []
	const {width} = useWindowDimensions()

	const getImages = () => {
		if (width < device.desktop) {
			return projectStore.adaptImagesTo2Col(images)
		}
		return images
	}

	return (
		<Container>
			{getImages()?.map(image =>
				<Image image={image}/>
			)}
		</Container>
	)
})