import FaqAccordion from "./FaqAccordion"


const Service4 = () => {
	return (
		<div className="w-[65%] min-h-[100px] m-auto mt-[100px] flex flex-col items-center justify-start gap-[50px]">
			<p className="m-auto font-heading text-[60px]">Frequently Asked Questions</p>
			<div className="w-[100%] min-h-[100px] flex flex-col items-center justify-start gap-[15px]">
				<FaqAccordion summary={"What services does Infinimove offer?"} detail={"We provide custom software development, mobile app development, and software upgrades."} />
				<FaqAccordion summary={"Can you upgrade our existing software?"} detail={"Yes, we can modernize and add features to your current software"} />
				<FaqAccordion summary={"What industries do you serve?"} detail={"We work across sectors like e-commerce, healthcare, finance, and many more."} />
			</div>
		</div>
	)
}

export default Service4