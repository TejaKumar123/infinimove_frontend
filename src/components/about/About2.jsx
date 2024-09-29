import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import imageasset from "../../assets/images/imageassets";

const About2 = () => {
	return (
		<div className="w-[100%] min-h-[150px] pt-[50px] px-[50px] flex flex-col items-center justify-start gap-[20px]">
			<p className="font-heading text-[40px]">We Successfully Partnered With</p>
			<div className="w-[100%] h-[80px] rounded-[25px] bg-service-border-linear p-[1px]">
				<div className="w-[100%] h-[100%] rounded-[24px] bg-[#20172f] flex items-center justify-center px-[20px]">
					<Swiper
						modules={[Autoplay]}
						spaceBetween={50}
						loop={true}
						slidesPerView={5}
						autoplay={{ delay: 0, disableOnInteraction: false }}
						style={{ width: "100%" }}
						freeMode={false}
						speed={2000}
					>
						<SwiperSlide>
							<img src={imageasset.Airbnb} alt="Airbnb" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Hubspot} alt="Hubspot" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Google} alt="Google" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Microsoft} alt="Microsoft" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Walmart} alt="Walmart" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.FedEx} alt="FedEx" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Airbnb} alt="Airbnb" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Hubspot} alt="Hubspot" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Google} alt="Google" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Microsoft} alt="Microsoft" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.Walmart} alt="Walmart" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={imageasset.FedEx} alt="FedEx" />
						</SwiperSlide>

					</Swiper>
				</div>

			</div>
		</div>
	)
}

export default About2