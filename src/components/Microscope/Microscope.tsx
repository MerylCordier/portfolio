import "./Microscope.css";
import Carousel from "../Carousel/Carousel";
import MicroscopeIMG from "../../assets/microscope2.png";

export default function Microscope() {
  return (
    <div className="microscope-container">
      {/* <MicroscopeSVG /> */}
      <img src={MicroscopeIMG} alt="Microscope" />
      <div className="optical-field"></div>
      <Carousel />
    </div>
  );
}
