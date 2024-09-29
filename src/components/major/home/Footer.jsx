import imageasset from "../../../assets/images/imageassets"
import { useState } from "react"
import FeedbackForm from "../../basic/footer/FeedbackForm"


const Footer = () => {

	const [openStatus, setOpenStatus] = useState(false);

	const handleClose = () => {
		setOpenStatus(false);
	}

	const handleOpen = () => {
		setOpenStatus(true);
	}

	return (
		<div id="footer" className="w-[100%] min-h-[450px] border border-[black] bg-footer-linear relative px-[50px] pt-[90px] flex flex-row items-start justify-center">
			<div className="absolute w-[85%] h-[100px] top-[-50px] translate-x-[-50%] left-[50%] rounded-[80px] border-[3px] border-[rgba(255,255,255,0.3)] flex flex-row items-center justify-around bg-footer-linear">
				<p className="text-[white] text-[170%] font-bold">Ready To Get Started</p>
				<p className="text-[white] text-[170%] font-bold">Contact Us Today</p>
				<button className="text-[#0020FF] text-[140%] rounded-[80px] px-[25px] py-[5px] border bg-button-radial">Get Started</button>

			</div>
			<div className="w-[90%] min-h-10 flex flex-col items-center justify-between gap-[30px]">
				<div className="w-full min-h-[90px] flex flex-row items-start justify-between text-[white]">
					<div className="w-[250px] h-[100%] flex flex-col items-start justify-start gap-[0px]">
						<div className="w-[100%] h-auto flex flex-row items-start justify-between  translate-x-[-55px]">
							<img src={imageasset.infinimove_logo} className="translate-y-[-20px]  translate-x-[15px]" />
							<p className="font-bold text-[130%]">infiniMove</p>
						</div>
						<p>At InfiniMove, we create seamless software solutions that drive innovation and growth for businesses worldwide.</p>
					</div>
					<div className="w-auto h-[100%] flex flex-col items-start justify-start gap-[7px]">
						<p className="text-[130%] font-bold mb-[10px]">Company</p>
						<a href="/">About Us</a>
						<a href="/">Careers</a>
						<a href="/" >Terms</a>
						<a href="/" >Contact Us</a>
					</div>
					<div className="w-auto h-[100%] flex flex-col items-start justify-start gap-[7px]">
						<p className="text-[130%] font-bold mb-[10px]">Use Cases</p>
						<a href="/" >UI/UX design</a>
						<a href="/" >Mobile app building</a>
						<a href="/" >Website building</a>
						<a href="/">Digital Marketing</a>
					</div>
					<div className="w-[400px] h-[100%] flex flex-col items-center justify-start gap-[30px]">
						<p className="text-[130%] font-bold">We Await For Valuable Feedback</p>
						<button
							onClick={handleOpen}
							className="font-bold text-[white] text-[130%] px-[20px] py-[7px] bg-[#6C48F4] rounded-[10px]"
						>
							Send Your Feedback
						</button>
						<FeedbackForm open={openStatus} onClose={handleClose} />
					</div>
				</div>
				<div className="w-full min-h-[60px] flex flex-row items-center justify-between px-[15px]">
					<div className="min-w-[30%] h-fit flex flex-row items-center justify-between gap-[20px] text-[white]">
						<p>&copy; infiniMove 2024</p>
						<a href="/">Privacy policy</a>
						<a href="/">Terms of use</a>
					</div>
					<div className="min-w-[30%] h-[100%] flex flex-row items-center justify-between gap-[40px] text-[white] rounded-[22px] border-[2px] border-[rgba(255,255,255,0.3)] px-[20px] py-[8px]">
						<a className="text-[150%] font-bold">Get in Touch</a>
						<div className="w-fit flex flex-row items-center justify-between gap-[10px]">
							<a href="https://www.facebook.com/infini.move/
" target="_blank"><img src={imageasset.Facebook} /></a>
							<a href="https://www.linkedin.com/groups/14501329" target="_blank"><img src={imageasset.Linkedin} /></a>
							<a href="https://www.instagram.com/invites/contact/?igsh=w27x5g1q5ch3&utm_content=vom7ob5" target="_blank"><img src={imageasset.Instagram} /></a>
							<a href="https://x.com/infinimove18076" target="_blank"><img src={imageasset.Twitter} /></a>
						</div>
					</div>
				</div>

			</div>

		</div>
	)
}

export default Footer;