import "./ColorPalette.css";

function ColorPalette({ colors }) {
  async function handleCopy(e) {
    e.stopPropagation();
    const color = e.target.childNodes[0].childNodes[0];
    console.log(color);
    await navigator.clipboard.writeText(color.data);
  }

  const paletteColors = [...colors];
  return (
    <>
      <div className="color-palette">
        {paletteColors.map((color, index) => (
          <div key={index} className="color-palette-container" title={color}>
            <div
              className="color-palette-main"
              onClick={handleCopy}
              style={{ backgroundColor: color }}
            >
              <div title={color} className="color-palette-name">
                {color}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorPalette;
