import { FunctionComponent, useState } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperClass } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import SwiperNavButtons from "./SwiperNavButtons";
interface SwiperWrapperProps {

	children: React.ReactNode;
	className?: string;
	gap?: number;
}

const SwiperWrapper: FunctionComponent<SwiperWrapperProps> = ({ children, className, gap = 10 }) => {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null);
	const [forceUpdate, setForceUpdate] = useState(0);

	const handleSwiperInit = (swiperInstance: SwiperClass) => {
		setSwiper(swiperInstance);
	};

	const handleSlideChange = () => {
		// Force re-render to update button visibility
		setForceUpdate(prev => prev + 1);
	};

	return (
		<div className="w-full relative overflow-visible">
			<Swiper
				onSwiper={handleSwiperInit}
				onSlideChange={handleSlideChange}
				onReachBeginning={handleSlideChange}
				onReachEnd={handleSlideChange}
				slidesPerView={'auto'}
				spaceBetween={gap}
				freeMode={true}
				watchOverflow={true}
				// navigation={true}
				modules={[FreeMode, Navigation]}
				className={`mySwiper ${className}`}
			>
				{children}
			</Swiper>
			<SwiperNavButtons swiper={swiper} key={forceUpdate} />
		</div >
	);
}

export default SwiperWrapper;