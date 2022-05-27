import doctor from '../../assets/image/doctor-HR.jpeg'

function LandingPage() {
    return (
        <main className="splash">
            <h1>Dev Doctor</h1>
            <h2>A website generation tool
            for the hard working
            entrepreneur</h2>
            <button>Get Started</button>
            <img style={ { width: '50%', height:'auto' } } src={doctor} alt="Friendly cartoon doctor smiling." />
        </main>
    );
};

export default LandingPage;