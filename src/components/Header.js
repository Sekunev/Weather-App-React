import React from "react";

const Header = () => {
  return (
    <section className="top-banner">
      <div className="container">
        <center>
          <img
            src="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=overcast-weather"
            alt="Bank logo"
            className="nav__logo"
            id="logo"
          />
          <h1 className="heading">Weather App</h1>
        </center>
      </div>
    </section>
  );
};

export default Header;
