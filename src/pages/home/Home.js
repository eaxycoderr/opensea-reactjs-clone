import Banner from "../../components/banner/Banner"
import Seig from "../../homesections/sEig/Seig"
import SF from "../../homesections/sF/SF"
import Sfi from "../../homesections/sFi/Sfi"
import Snine from "../../homesections/sNine/Snine"
import Sone from "../../homesections/sOne/Sone"
import Ssev from "../../homesections/sSev/Ssev"
import Ssix from "../../homesections/sSix/Ssix"
import Sth from "../../homesections/sTh/Sth"
import Stw from "../../homesections/sTw/Stw"
import "./home.css"

const Home = () => {
  return (
    <div>
        <Banner />
        <Sone />
        <Stw />
        <Sth />
        <SF />
        <Sfi />
        <Ssix />
        <Ssev />
        <Seig />
        <Snine />
    </div>
  )
}

export default Home