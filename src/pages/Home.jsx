import Navbar from "../components/major/home/Navbar"
import Services from "../components/major/home/Services"
import About from "../components/major/home/About"
import Footer from "../components/major/home/Footer"
import { useState } from "react"

const Home = () => {

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

export default Home