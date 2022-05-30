import doctor from "../../assets/image/doctor-HRCustom.jpeg";
import "./landingPage.css";

function LandingPage() {
  return (
    <main className="splash">
      <img
        className="splashImg"
        src={doctor}
        alt="Friendly cartoon doctor smiling."
      />
      <h1>Dev Doctor</h1>
      <h2>A website generation tool for the hard working entrepreneur</h2>
      <button>Get Started</button>
    </main>
  );
}

export default LandingPage;
