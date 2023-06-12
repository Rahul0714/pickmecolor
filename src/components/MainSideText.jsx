import { useNavigate } from "react-router-dom";
import "./Main.css";

function MainSideText({
  text,
  size = "25px",
  name = "Gradient",
  loc = "/gradients",
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(loc);
  };
  return (
    <>
      <div className="subheading-top">
        <div className="subheading-top-title" style={{ fontSize: size }}>
          {text}
        </div>
        <div className="subheading-top-btn">
          {text === "Feeling Red" ||
          text === "Click on top or bottom color block to copy it." ? (
            <button onClick={handleClick}>{name}</button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MainSideText;
