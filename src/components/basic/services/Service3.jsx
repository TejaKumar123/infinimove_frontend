import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCard from './SwiperCard';
import imageasset from '../../../assets/images/imageassets';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const Service3 = () => {
	return (
		<div className="w-[60%] min-h-[100px] m-auto mt-[100px] flex flex-col items-center justify-start gap-[50px]">
			<p className="text-[60px] font-heading">What Our Clients Say!</p>
			<div className="w-[80%] h-[150px] relative rounded-[15px]">
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: '.nextArrowNav',
						prevEl: '.prevArrowNav',
					}}
					spaceBetween={50}
					slidesPerView={2}
					initialSlide={1}
					centeredSlides={true}
					style={{ width: '100%', margin: '0 auto', borderRadius: "15px" }}
				>
					<SwiperSlide>
						<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The teams insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
					</SwiperSlide>
					<SwiperSlide>
						<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The teams insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
					</SwiperSlide>
					<SwiperSlide>
						<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The teams insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
					</SwiperSlide>
					<SwiperSlide>
						<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The teams insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
					</SwiperSlide>
					<SwiperSlide>
						<SwiperCard img={imageasset.Avatar} name="Alex Turner" profession={"Data Scientist @ NexaCorp"} feedback={"“The team’s insights transformed how we approach our data. Fast, efficient, and incredibly helpful!”"} />
					</SwiperSlide>

					<div className="nextArrowNav border z-[10] w-[35px] h-[35px] bg-[white] absolute top-[50%] right-[20%] translate-y-[-50%] flex items-center justify-center rounded-[50%] cursor-pointer">
						<ArrowForwardIos sx={{ color: "black" }} />
					</div>

					<div className="prevArrowNav border z-[10] w-[35px] h-[35px] bg-[white] absolute top-[50%] left-[20%] translate-y-[-50%] flex items-center justify-center rounded-[50%] cursor-pointer">
						<ArrowBackIos sx={{ color: "black" }} />
					</div>

				</Swiper>

				<div className='absolute left-0 h-[100%] w-[120px] bg-left-feedback-linear z-[1] top-0 rounded-tr-[100%] rounded-br-[100%] rounded-tl-[15px] rounded-bl-[15px] backdrop-blur-[4px] ' >
				</div>

				<div className='absolute right-0 h-[100%] w-[120px] bg-right-feedback-linear z-[1] top-0 rounded-tl-[100%] rounded-bl-[100%] rounded-tr-[15%] rounded-br-[15%] backdrop-blur-[4px]' >
				</div>

			</div>
		</div >
	)
}


export default Service3