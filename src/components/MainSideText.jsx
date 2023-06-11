import "./Main.css";

function MainSideText({ text }) {
  return (
    <>
      <div className="subheading-top">
        <div className="subheading-top-title">{text}</div>
        <div className="subheading-top-btn">
          <button>Gradients</button>
        </div>
      </div>
    </>
  );
}

export default MainSideText;
