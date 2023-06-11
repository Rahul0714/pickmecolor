import "./Header.css";
function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-top">
          <div className="header-name">PickMeColor</div>
          <div className="header-about">About</div>
        </div>
        <div className="header-instruction">
          <div className="header-title">Click Color to Copy</div>
          <div className="header-subtitle">Always perfect color</div>
        </div>
      </div>
    </>
  );
}

export default Header;
