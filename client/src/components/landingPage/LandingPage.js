import doctor from "../../assets/image/doctor-HRCustom.jpeg";
import "./landingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main>
      <div className="info">
        <h1>Dev Doctor</h1>
        <h2>A website generation tool <span className="conditional__br"><br></br></span>for the hard working entrepreneur</h2>
          <Link to="/app/login"><button>Get Started</button></Link>
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
    </main>
  );
}

export default LandingPage;
