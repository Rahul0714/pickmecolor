import "./ColorPalette.css";

function ColorPalette({ colors }) {
  console.log(colors);
  const paletteColors = [...colors];
  return (
    <>
      <div className="color-palette">
        {paletteColors.map((color, index) => (
          <div key={index} className="color-palette-container">
            <div
              className="color-palette-main"
              style={{ backgroundColor: color }}
            >
              <div className="color-palette-name">{color}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorPalette;
