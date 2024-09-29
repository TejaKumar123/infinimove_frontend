import imageasset from "../../../assets/images/imageassets"
import ServiceCard from "./ServiceCard"

const Service2 = () => {
	return (
		<div id="services" className="w-[80%] min-h-[200px] p-[5px] m-auto mt-[100px] rounded-[20px] bg-white bg-service-border-linear">
			<div className="w-[100%] min-h-[200px] rounded-[15px] relative p-[50px] bg-[#0b021c] flex flex-col items-center justify-start pt-[100px] gap-[50px]">

				<div className="w-fit h-auto px-[20px] py-[0px] absolute translate-x-[-50%] left-[50%] top-[-50px] bg-[#0b021c] rounded-[20px] border-[rgba(255,255,255,0.5)] border-[5px]">
					<p className="text-[60px] font-heading">Our Services</p>
				</div>

				<div className="w-[100%] min-h-[200px] rounded-[20px] bg-service-border-linear p-[4px]">
					<ServiceCard src={imageasset.service3} title={"Custom Software Development"} description={"We build tailored solutions that meet your unique business needs."} />
				</div>

				<div className="w-[100%] min-h-[200px] rounded-[20px] bg-service-border-linear p-[4px]">
					<ServiceCard src={imageasset.service1} title={"Mobile App Development"} description={"Creating user-friendly mobile apps (Android and iOS) to help your business reach a broader audience."} />
				</div>

				<div className="w-[100%] min-h-[200px] rounded-[20px] bg-service-border-linear p-[4px]">
					<ServiceCard src={imageasset.service2} title={"Existing Software Extensions"} description={"Modernise your existing software with latest cutting edge technology and new innovative features"} />
				</div>


			</div>
		</div >
	)
}

export default Service2