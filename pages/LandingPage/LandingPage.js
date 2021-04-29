import Navbar from "../../components/Navbar/Navbar";

import Slider from "../../components/Slider/Slider";
import Offer from "../../components/Offer/Offer";
import Product from "../../components/Product/Product";
import Detail from "../../components/Details/Details";
import Video from "../../components/Video/Video";
import Gallery from "../../components/gallery/Gallery";

import Footer from "../../components/Footer/Footer";
function LandingPage(props) {
  return (
    <div >
      <Navbar/>
      <Slider />
      <Offer />
      <Product products={props.data}/>
      <Detail/>
      <Video/>
      <Gallery/>
      <Footer />
    </div>
  );
}

export default LandingPage;
