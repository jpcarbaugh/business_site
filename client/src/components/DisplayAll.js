import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayButton from "./buttons/DisplayButton";

const DisplayAll = (props) => {
    const [service, setService] = useState([]);

    const {isLoggedIn} = props;


    ////This makes an API call to the database to pull in the current data all services
    useEffect(() => {
        axios.get("http://localhost:8000/api/service")
        .then(res => setService(res.data));
    }, [service]);

    return (
        <div className="container">
            <h1 style={{marginTop: "25px"}}>Inspection Services</h1>
            <p style={{marginTop: "25px"}}>
            In addition to general home inspections, we can also inspect, document, and even oversee work you are getting done to your home. 
            We are not the general contractors for that work but we will be able to ensure those projects are getting done according to the 
            manufactures recommendations or offer third party documentation reporting the quality of the work.
            </p>
            <div className="row">
                    {service.map((element, index) => {
                    return(
                        <div className="col-sm-3" key={index}>
                            <div className="card text-center text-white bg-secondary" style={{width: '18rem', marginBottom: "10px"}}>
                                <div className="card-body">
                                    <h5 className="card-title">{element.title}</h5>
                                    <p>{element.timeLength}</p>
                                    <p>${element.price}</p>
                                    <DisplayButton isLoggedIn={isLoggedIn} elementId={element._id}/>
                                </div>
                            </div>
                        </div>
                    )
                    })}
            </div>
            
        </div>
    )
};

export default DisplayAll;