import Navbar from "../components/major/home/navbar"
import Services from "../components/major/home/services"
import About from "../components/major/home/about"
import Footer from "../components/major/home/footer"
import { useState } from "react"

const home = () => {

	const [aboutvisibility, setAboutvisibility] = useState(false);

	return (
		<div className="bg-[#0B021C]">
			<Navbar setAboutvisibility={setAboutvisibility} />
			{aboutvisibility
				? <About />
				: <Services />
			}
			<Footer />
		</div>
	)
}

export default home