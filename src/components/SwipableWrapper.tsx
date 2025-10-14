import { FunctionComponent } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
interface SwiperWrapperProps {

	children: React.ReactNode;
	className?: string;
	gap?: number;
}

const SwiperWrapper: FunctionComponent<SwiperWrapperProps> = ({ children, className, gap = 10 }) => {
	return (<Swiper
		slidesPerView={'auto'}
		spaceBetween={gap}
		freeMode={true}
		watchOverflow={true}

		modules={[FreeMode]}
		className={`mySwiper  ${className}`}
	>
		{children}
	</Swiper>);
}

export default SwiperWrapper;