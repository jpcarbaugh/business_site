import paMap from "../img/paMap.png"

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <h4>Why should I get an inspection report?</h4>
            <div className="container">
                <p>
                    Home sellers are often honest and will disclose any issue they may know about. 
                    Unfortunately, they are not trained to see every defect on or in the home. 
                    Home buyers should invest knowing every issue they are buying into, and not just the obvious ones. 
                    Expensive, Hard to see defects could be overlooked and may lead to high contractor fees in the future. 
                    We are big on making hidden fees transparent so let us show you what you will be getting into when buying a home.
                </p>
            </div>

            <div>
                <img src={paMap} alt="PA Map" style={{marginBottom: "15px"}}></img>
            </div>

            <h2>Contact Us</h2>
            <p>Not ready to schedule today? Ask us anything! We will get back to you shortly.</p>
            <h5>Get in Touch!</h5>
            <p>(717)999-0000</p>
            <a href="mailto:somebusiness@gmail.com">somebusiness@gmail.com</a>
            <p>York, PA 17402</p>
        </div>
    )
};

export default About;