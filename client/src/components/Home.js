import { navigate } from "@reach/router";

const Home = () => {
    return (
        <div>
            <p>
                We provide home inspection reports to York County and the surrounding area. 
                A home inspection report will tell you about any observable defects on your home. 
                Rotting wood and dripping soffits will lead to expensive repair bills. 
                Reveal any unwanted surprises by ordering a Home Inspection report.
            </p>

            <h5>What inspection services would you like to schedule?</h5>
            
            <p>General Home Inspection // Pre-Offer Inspectors Consultation // Home Check Up Inspection</p>

            <button className='btn btn-danger' onClick={() => {navigate("/services")}}>Book Now</button>
        </div>
    )
};

export default Home;