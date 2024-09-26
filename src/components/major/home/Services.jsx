import Service1 from "../../basic/services/Service1"
import Service2 from "../../basic/services/Service2"

const services = () => {
	return (
		<div id="services" className="w-[100%] h-[1500px] pt-[70px] bg-[#0B021C] text-[white]">
			<Service1 />
			<Service2 />
		</div>
	)
}

export default services