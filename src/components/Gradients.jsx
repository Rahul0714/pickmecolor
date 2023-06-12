import GradientColorPalette from "./GradientColorPalette";
import Header from "./Header";
import MainSideText from "./MainSideText";
import { gradientColors } from "./data/Colors";

function Gradients() {
  return (
    <>
      <Header />
      <MainSideText
        text="Click on top or bottom color block to copy it."
        size="17px"
        name="Solid"
        loc="/"
      />
      <GradientColorPalette colors={gradientColors} />
    </>
  );
}

export default Gradients;
