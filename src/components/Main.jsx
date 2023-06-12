import ColorPalette from "./ColorPalette";
import "./Main.css";
import MainSideText from "./MainSideText";
import {
  blueVariations,
  fancyVariations,
  greenVariations,
  redVariations,
  yellowVariations,
} from "./data/Colors";

function Main() {
  console.log(redVariations);
  return (
    <>
      <div className="color-palette-main-container">
        <MainSideText text="Feeling Red" />
        <ColorPalette colors={redVariations} />
        <MainSideText text="Feeling Blue" />
        <ColorPalette colors={blueVariations} />
        <MainSideText text="Feeling Green" />
        <ColorPalette colors={greenVariations} />
        <MainSideText text="Feeling Yellow" />
        <ColorPalette colors={yellowVariations} />
        <MainSideText text="Feeling Fancy" />
        <ColorPalette colors={fancyVariations} />
      </div>
    </>
  );
}

export default Main;
