import Navbar from "../components/major/home/navbar"
import Services from "../components/major/home/services"
import About from "../components/major/home/about"
import Footer from "../components/major/home/footer"

const home = () => {
	return (
		<div className="bg-[#0B021C]">
			<Navbar />
			<Services />
			<About />
			<Footer />
		</div>
	)
}

export default home