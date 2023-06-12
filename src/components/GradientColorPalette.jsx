import "./GradientColorPalette.css";

function GradientColorPalette({ colors }) {
  const paletteColors = [...colors];
  console.log(paletteColors.length);

  async function handleClick(e) {
    e.stopPropagation();
    const classname = e.target.className;
    if (classname === "gradient-firstcolor") {
      console.log(e.target.firstChild.firstChild.data);
      await navigator.clipboard.writeText(e.target.firstChild.firstChild.data);
    } else if (classname === "linear-gradient") {
      console.log(
        e.target.firstChild.childNodes[0].data,
        e.target.lastChild.childNodes[0].data
      );

      await navigator.clipboard.writeText([
        e.target.firstChild.childNodes[0].data,
        e.target.lastChild.childNodes[0].data,
      ]);
    } else if (classname === "gradient-secondcolor") {
      console.log(e.target.firstChild.firstChild.data);
      await navigator.clipboard.writeText(e.target.firstChild.firstChild.data);
    } else {
      console.log("wrongs");
    }
  }

  return (
    <>
      <div className="gradients-container">
        {paletteColors.map((color, index) => (
          <div key={index} className="single-gradient" title={color}>
            <div
              onClick={handleClick}
              className="gradient-firstcolor"
              title={color[0]}
              style={{ backgroundColor: color[0] }}
            >
              <div className="transparent">{color[0]}</div>
            </div>
            <div
              onClick={handleClick}
              className="linear-gradient"
              title={[color[0], color[1]]}
              style={{
                backgroundImage: `linear-gradient(to right, ${color[0]}, ${color[1]})`,
              }}
            >
              <div className="transparent">{color[0]}</div>
              <div className="transparent">{color[1]}</div>
            </div>
            <div
              onClick={handleClick}
              title={color[0]}
              className="gradient-secondcolor"
              style={{ backgroundColor: color[1] }}
            >
              <div className="transparent">{color[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GradientColorPalette;
