import { useEffect } from "react";
import doctor from "../../assets/image/doctor-HRCustom.jpeg";
import "./landingPage.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function LandingPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <main className="landing__page">
      <div className="info">
        <h1 className="splash__title">Dev Doctor</h1>
        <h2 className="splash__subtitle">
          A website generation tool{" "}
          <span className="conditional__br">
            <br></br>
          </span>
          for the hard working entrepreneur
        </h2>
        {Auth.loggedIn() ? (
          <Link to="/app/projects">
            <button className="splash__button">Get Started</button>
          </Link>
        ) : (
          <Link to="/app/login">
            <button className="splash__button">Get Started</button>
          </Link>
        )}
      </div>
      <div className="hero">
        <div className="gradient"></div>
        <img
          className="splash__img"
          src={doctor}
          alt="Friendly cartoon doctor smiling."
        />
      </div>
      <div className="splash"></div>
      <a className="credit" href="http://www.freepik.com">
        Artwork Designed by Cornecoba / Freepik
      </a>
    </main>
  );
}

export default LandingPage;
