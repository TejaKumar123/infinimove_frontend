import imageasset from "../../assets/images/imageassets"


const About1 = () => {
	return (
		<div className="w-[100%] min-h-[200px] flex flex-col items-center justify-start gap-[20px] pt-[50px] px-[50px]">
			<p className="font-heading text-[65px]">About Us</p>
			<div className="w-[100%] min-h-[300px] flex flex-row items-center justify-around">
				<div className="w-[45%] h-[100%] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] h-[100%] rounded-[10px] bg-[#20172f]">
						<img src={imageasset.about1} className="h-[100%] w-[100%] translate-x-[40px] translate-y-[40px]" />
					</div>
				</div>
				<div className="w-auto min-h-[100px] flex flex-col items-start justify-start gap-[15px]">
					<div className="w-[350px] min-h-[50px] bg-service-border-linear p-[1px] rounded-[20px]">
						<div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[10px] py-[0px]">
							<p className="font-heading text-[50px]">3+ Years</p>
						</div>
					</div>
					<div className="w-[350px] min-h-[50px] bg-service-border-linear p-[1px] rounded-[20px]">
						<div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[10px] py-[0px]">
							<p className="font-heading text-[50px]">20+ Clients</p>
						</div>
					</div>
					<div className="w-[350px] min-h-[50px] bg-service-border-linear p-[1px] rounded-[20px]">
						<div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[10px] py-[0px]">
							<p className="font-heading text-[50px]">30+ Projects</p>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<p className="text-[190%] leading-[1.1] text-center font-heading font-[200]">At InfiniMove, we are passionate about transforming ideas into cutting-edge digital realities. With over two years of experience, we specialize in delivering innovative and functional solutions that make a lasting impact. Our team is driven by a shared vision of creating digital experiences that not only meet but exceed expectations.</p>
			<br />
			<hr className="bg-divider-linear h-[2px] border-none w-screen" />
		</div>
	)
}

export default About1