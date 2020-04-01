import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useGallery from '../../state/home/hooks/useGallery'
import classnames from 'classnames'
import {isAndroid, isIOS} from 'react-device-detect'

import Spinner from '../../components/spinner'
import ContainerFluid from '../../components/containerFluid'
import InfiniteList from '../../components/infinite'

const StyledModal = styled.div`
	display: block;
	position: fixed;
	z-index: 10;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.85);
`;

const StyledModalContent = styled.div`
	position: relative;
	margin: auto;
	padding: 0;
	width: auto;
	max-width: 500px;
	top: 50%;
    transform: translateY(-50%);
    padding: 7px;
    border: 2px ridge #dedede;
    @media(max-width: 767px) {
		max-width: calc(100% - 30px);
	} 
`;

const StyledClose = styled.span`
	color: white;
	position: absolute;
	top: 15px;
	right: 25px;
	font-size: 35px;
	font-weight: bold;
	transition: 0.6s ease;
	&:hover, &:focus {
		color: #999;
		text-decoration: none;
		cursor: pointer;
	}
`;

const SlideItem = styled.div`
	display: block;
`;

const ButtonArrow = styled.a`
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	padding: 16px;
	margin-top: -50px;
	color: #fff;
	font-weight: bold;
	font-size: 20px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
	-webkit-user-select: none;
	&:hover {
		background-color: rgba(0, 0, 0, 0.8);
		color: #999;
	}
	&.next {
		right: 0;
		border-radius: 3px 0 0 3px;
	}
	&.prev {
		left: 0;
		border-radius: 3px 0 0 3px;
	}
	&.none {
		display: none !important;
	}
`;

const NumberText = styled.div`
	color: #f2f2f2;
	font-size: 12px;
	padding: 8px 12px;
	position: absolute;
	top: 5px;
`;
const StyledImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const Home = () => {
	const [gallery, isLoading, getImage] = useGallery();
	const [list, setList] = useState([]);
	const [slideIndex, setSlideIndex] = useState(1);
	const [openLightBox, setOpenLightBox] = useState(false);
	const [didMount, setDidMount] = useState(false);

	useEffect(() => {setDidMount(true)}, []);

	useEffect(() => {
		if(gallery && gallery.imageList) {
			let images = [...list]
			let imageList = images.concat(gallery.imageList)
			setList(imageList)
		}
	}, [gallery]);

	const closeModal = () => {
		setOpenLightBox(false);
	}

	const openModal = (n) => {
		setOpenLightBox(true);
		setSlideIndex(n);
	}

	const plusSlides = (n) => {
		setSlideIndex(slideIndex + n);
		console.log(slideIndex + n);
	}

	return (
		<>
			<ContainerFluid className={classnames({ android: isAndroid == true, ios: isIOS == true})}>
				<Spinner show={isLoading} />
				<InfiniteList state={list} openModal={openModal} />
			</ContainerFluid>
			{openLightBox &&
				<StyledModal>
					<StyledModalContent>
						<StyledClose onClick={(e) => {e.preventDefault(); closeModal()}}>&times;</StyledClose>
						<NumberText>{slideIndex + 1} / {list.length}</NumberText>
						<StyledImg src={`${list[slideIndex]}`} />
						<ButtonArrow className="prev" className={classnames({ none: slideIndex == 0, prev: slideIndex > 0})} onClick={(e) => {e.preventDefault(); plusSlides(-1)}}>&#10094;</ButtonArrow>
						<ButtonArrow className="next" className={classnames({ none: slideIndex == 104, next: slideIndex < 104})} onClick={(e) => {e.preventDefault(); plusSlides(1)}}>&#10095;</ButtonArrow>
					</StyledModalContent>
				</StyledModal>
			}
		</>
	)
};

export default Home
