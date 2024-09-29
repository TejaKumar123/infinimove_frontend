import Service3 from "../../basic/services/Service3"
import About1 from "../../about/About1";
import About2 from "../../about/About2";
import About3 from "../../about/About3";
import About4 from "../../about/About4";

const About = () => {
	return (
		<div id="about" className="w-full min-h-[1500px] pt-[70px] text-[white] pb-[150px]" >
			<About1 />
			<About2 />
			<About3 />
			<About4 />
			<Service3 />
		</div>
	)
}

export default About;