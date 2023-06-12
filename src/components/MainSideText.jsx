import "./Main.css";

function MainSideText({ text }) {
  return (
    <>
      <div className="subheading-top">
        <div className="subheading-top-title">{text}</div>
        <div className="subheading-top-btn">
          {text === "Feeling Red" ? <button>Gradients</button> : null}
        </div>
      </div>
    </>
  );
}

export default MainSideText;
