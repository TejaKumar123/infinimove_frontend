
const ServiceCard = ({ src, title, description }) => {
	return (
		<div className="group w-[100%] h-[100%] rounded-[16px] bg-[#20172f] flex flex-row items-center justify-between py-[10px] px-[25px] gap-[30px] hover:bg-[#D6D6D6]">
			<div className="group-hover:scale-[1.3] transition-[0.3s] w-[40%] h-[100%] flex items-center justify-center">
				<img src={src} className="h-[100%]" />
			</div>
			<div className="w-[50%] h-[100%] flex flex-col items-start justify-start gap-[15px]">
				<p className="group-hover:text-[#1A225A] font-subheading text-[50px] font-bold leading-[1.2]">{title}</p>
				<p className="group-hover:text-[#3749C0] group-hover:font-[500] text-[140%] font-[100]">{description}</p>
			</div>
		</div>
	)
}

export default ServiceCard