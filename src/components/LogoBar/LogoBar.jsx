import "./LogoBar.css";
import { LogoBarImages } from "../../Data/Data";

const LogoBar = () => {
  return (
    <div className="logo-bar">
      {LogoBarImages.map((image, index) => {
        return <img src={image} key={index} />;
      })}
    </div>
  );
};

export default LogoBar;
