import ColorPalette from "./ColorPalette";
import "./Main.css";
import MainSideText from "./MainSideText";

function Main() {
  const redVariations = [
    "#FF6263",
    "#DE4839",
    "#BF3325",
    "#E21717",
    "#BF3312",
    "#D82E2F",
  ];
  const blueVariations = [
    "#1B98F5",
    "#23C4ED",
    "#383CC1",
    "#12B0E8",
    "#51E1ED",
    "#207398",
  ];
  const greenVariations = [
    "#1FAA59",
    "#38CC77",
    "#02B290",
    "#50DBB4",
    "#3DBE29",
    "#4DD637",
  ];
  const yellowVariations = [
    "#E8BD0D",
    "#EDBF69",
    "#F4BE2C",
    "#EDC126",
    "#E5D68A",
    "#DDD101",
  ];
  const fancyVariations = [
    "#8D3DAF",
    "#E07C24",
    "#758283",
    "#E03B8B",
    "#FF6666",
    "#242B2E",
  ];
  return (
    <>
      <div>
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
