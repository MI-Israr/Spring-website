import "./LogoBar.css";

const images = [
  "/src/assets/Mask-Group-1.png",
  "/src/assets/Mask-Group-2.png",
  "/src/assets/Mask-Group-3.png",
  "/src/assets/Mask-Group-4.png",
  "/src/assets/Mask-Group-5.png",
  "/src/assets/Mask-Group-6.png",
];
const LogoBar = () => {
  return (
    <div className="logo-bar">
      {images.map((image, index) => {
        return <img src={image} key={index} />;
      })}
    </div>
  );
};

export default LogoBar;
