import imageasset from "../../assets/images/imageassets"

const About3 = () => {
	return (
		<div className="w-[100%] min-h-[200px] flex flex-col items-center justify-start gap-[70px] pt-[50px] px-[50px]">
			<p className="font-heading text-[40px]">We deliver you great Quality Services</p>
			<div className="w-[100%] min-h-[300px] flex flex-row items-center justify-around">
				<div className="w-auto min-h-[100px] flex flex-col items-start justify-start gap-[15px]">
					<div className="w-[100%] min-h-[50px] bg-service-border-linear p-[1px] rounded-[20px]">
						<div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[20px] py-[10px]">
							<p className="font-heading text-[30px]">Mobile App Development</p>
						</div>
					</div>
					<div className="w-[100%] min-h-[50px] bg-service-border-linear p-[1px] rounded-[20px]">
						<div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[20px] py-[10px]">
							<p className="font-heading text-[30px]">Custom Software Development</p>
						</div>
					</div>
					<div className="w-[100%] min-h-[50px] bg-service-border-linear p-[1px] rounded-[20px]">
						<div className="w-[100%] h-[100%] flex items-center justify-center bg-[#21172f] rounded-[19px] px-[20px] py-[10px]">
							<p className="font-heading text-[30px]">Existing Software Extensions</p>
						</div>
					</div>
				</div>
				<div className="w-[45%] h-[100%] rounded-[10px] bg-service-border-linear p-[1px]">
					<div className="w-[100%] h-[100%] rounded-[10px] bg-[#20172f]">
						<img src={imageasset.about2} className="h-[100%] w-[100%] translate-x-[-40px] translate-y-[-40px]" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About3