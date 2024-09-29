import imageasset from "../../assets/images/imageassets"


const About4 = () => {
	return (
		<div className="w-auto min-h-[100px] m-auto pt-[50px] flex flex-col items-center justify-start gap-[30px]">
			<p className="font-heading text-[40px]">We are commited with great</p>
			<div className="w-auto min-h-[100px] flex flex-row items-center justify-between gap-[30px]">
				<div className="w-[110px] h-[110px] rounded-[10px] flex flex-col items-center justify-center bg-about-box-linear border-[rgba(255,255,255,0.2)] border-[2px] group hover:bg-white transition-[0.3s] hover:scale-[1.1] origin-top-left">
					<img src={imageasset.about3} />
					<p className="font-bold group-hover:text-[black]">Honesty</p>
				</div>
				<div className="w-[110px] h-[110px] rounded-[10px] flex flex-col items-center justify-center bg-about-box-linear border-[rgba(255,255,255,0.2)] border-[2px] group hover:bg-white transition-[0.3s] hover:scale-[1.1] origin-top-left">
					<img src={imageasset.about3} />
					<p className="font-bold group-hover:text-[black]">Belief</p>
				</div>
				<div className="w-[110px] h-[110px] rounded-[10px] flex flex-col items-center justify-center bg-about-box-linear border-[rgba(255,255,255,0.2)] border-[2px] group hover:bg-white transition-[0.3s] hover:scale-[1.1] origin-top-left">
					<img src={imageasset.about3} />
					<p className="font-bold group-hover:text-[black]">Credibility</p>
				</div>
				<div className="w-[110px] h-[110px] rounded-[10px] flex flex-col items-center justify-center bg-about-box-linear border-[rgba(255,255,255,0.2)] border-[2px] group hover:bg-white transition-[0.3s] hover:scale-[1.1] origin-top-left">
					<img src={imageasset.about3} />
					<p className="font-bold group-hover:text-[black]">Regard</p>
				</div>
				<div className="w-[110px] h-[110px] rounded-[10px] flex flex-col items-center justify-center bg-about-box-linear border-[rgba(255,255,255,0.2)] border-[2px] group hover:bg-white transition-[0.3s] hover:scale-[1.1] origin-top-left">
					<img src={imageasset.about3} />
					<p className="font-bold group-hover:text-[black]">Perfectness</p>
				</div>
			</div>
			<br />
			<br />
			<hr className="bg-divider-linear h-[2px] border-none w-screen" />
		</div>
	)
}

export default About4