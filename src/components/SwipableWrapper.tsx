import { FunctionComponent, useState, useRef } from "react";
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
	const [isSwipeActive, setIsSwipeActive] = useState(false);
	const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

	const handleSwiperInit = (swiperInstance: SwiperClass) => {
		setSwiper(swiperInstance);
	};

	const handleSlideChange = () => {
		// Force re-render to update button visibility
		setForceUpdate(prev => prev + 1);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		const touch = e.touches[0];
		touchStartRef.current = {
			x: touch.clientX,
			y: touch.clientY,
			time: Date.now()
		};
		setIsSwipeActive(false);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!touchStartRef.current) return;

		const touch = e.touches[0];
		const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
		const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

		// If horizontal movement is greater than vertical, it's likely a swipe
		if (deltaX > deltaY && deltaX > 10) {
			setIsSwipeActive(true);
		}
	};

	const handleTouchEnd = () => {
		// Reset swipe state after a short delay
		setTimeout(() => {
			setIsSwipeActive(false);
		}, 100);
		touchStartRef.current = null;
	};

	const handleClick = (e: React.MouseEvent) => {
		// Prevent click events if a swipe just occurred
		if (isSwipeActive) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	return (
		<div
			className="w-full relative overflow-visible"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			onClick={handleClick}
		>
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