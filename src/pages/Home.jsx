import Navbar from "../sections/Navbar"
import Featured from "../sections/Featured"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import HoverList from "../sections/HoverList"
import Max from "../sections/Max"
import Trending from "../sections/Trending"
import Typeslider from "../sections/Typeslider"
import Unlimited from "../sections/Unlimited"
import Zion from "../sections/Zion"
import Slider from "../components/Slider"
import { useSelector } from "react-redux"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Hero />
      <Typeslider />
      <Max />
      <Featured />
      <Zion />
      <Trending />
      <Unlimited />
      <HoverList />
      <Footer />
    </div>
  )
}

export default Home