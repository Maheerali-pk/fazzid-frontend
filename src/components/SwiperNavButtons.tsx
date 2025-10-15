import { nextArrowIcon, prevArrowIcon } from "@/helpers/icons";
import { FunctionComponent } from "react";
import { SwiperClass, useSwiper } from "swiper/react";

interface SwiperNavButtonsProps {
	swiper: SwiperClass | null;
}

const SwiperNavButtons: FunctionComponent<SwiperNavButtonsProps> = ({ swiper }) => {

	const handlePrevClick = () => {
		if (swiper) {
			// Calculate how many slides to move based on container width
			const containerWidth = swiper.width;
			const slideWidth = swiper.slidesSizesGrid[0] || 1;
			const slidesToMove = Math.max(1, Math.floor(containerWidth / slideWidth));

			// Use slidePrev with multiple slides, respecting boundaries
			for (let i = 0; i < slidesToMove; i++) {
				if (swiper.isBeginning) break;
				swiper.slidePrev();
			}
		}
	};

	const handleNextClick = () => {
		if (swiper) {
			// Calculate how many slides to move based on container width
			const containerWidth = swiper.width;
			const slideWidth = swiper.slidesSizesGrid[0] || 1;
			const slidesToMove = Math.max(1, Math.floor(containerWidth / slideWidth));

			// Use slideNext with multiple slides, respecting boundaries
			for (let i = 0; i < slidesToMove; i++) {
				if (swiper.isEnd) break;
				swiper.slideNext();
			}
		}
	};

	return (
		<>
			{swiper && !swiper.isBeginning && (
				<button
					className="absolute z-20 cursor-pointer top-1/2 -translate-y-[1.5rem] -left-4 -translate-x-1/2 swiper-custom-prev w-4 h-4 flex items-center justify-center rounded-full"
					onClick={handlePrevClick}
				>
					{prevArrowIcon}
				</button>
			)}
			{swiper && !swiper.isEnd && (
				<button
					className="absolute z-20 cursor-pointer top-1/2 -translate-y-[1.5rem] -right-4 swiper-custom-next w-4 h-4 flex items-center justify-center rounded-full"
					onClick={handleNextClick}
				>
					{nextArrowIcon}
				</button>
			)}
		</>
	);
};

export default SwiperNavButtons;