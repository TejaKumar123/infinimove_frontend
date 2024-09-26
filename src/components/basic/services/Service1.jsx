import imageasset from "../../../assets/images/imageassets"
import Person from "@mui/icons-material/Home"

const Service1 = () => {
	return (
		<div className="w-[100%] min-h-[550px] flex flex-row items-center justify-center pl-[100px]">
			<div className="w-[500px] min-h-[100px]">
				<p className="text-[65px] font-heading font-[600]">Welcome to InfiniMove</p><br />
				<p className="text-[120%] font-[600]">If you're looking for cutting-edge software solutions and innovative mobile app development, you’ve come to the right place. At INfinimove, we turn your ideas into reality with technology that drives results.</p><br />
				<button className="px-[30px] py-[10px] text-[120%] ml-[25px] rounded-[80px] bg-gradient-to-r from-[#1A225AF5] to-[#3848C0F5] hover:from-[#4057F9FC] hover:via-[#616DC4BD] hover:to-[#0020FFFC] transition-[1s] hover:shadow-[4px_4px_6px_white] hover:scale-[1.1] origin-top-left font-bold">Know More About Us</button>
			</div>
			<img src={imageasset.website1} />
		</div>
	)
}

export default Service1;