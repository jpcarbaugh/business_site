import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";

const DisplayAll = () => {
    const [service, setService] = useState([]);

    //handles the redirect to the edit page to update a service
    // const handleEdit = (elementId) => {
    //     navigate(`/service/${elementId}/edit`);
    // };

    //handles the redirect to the display of a single service
    const handleDetails = (elementId) => {
        navigate(`/services/${elementId}`);
    };

    ////This makes an API call to the database to pull in the current data all services
    useEffect(() => {
        axios.get("http://localhost:8000/api/service")
        .then(res => setService(res.data));
    }, []);

    return (
        <div className="container">
            <h1>Inspection Services</h1>
            <p>
            In addition to general home inspections, we can also inspect, document, and even oversee work you are getting done to your home. 
            We are not the general contractors for that work but we will be able to ensure those projects are getting done according to the 
            manufactures recommendations or offer third party documentation reporting the quality of the work.
            </p>
            <div className="row">
                    {service.map((element, index) => {
                    return(
                        <div className="col-sm-3">
                            <div className="card text-center text-white bg-secondary" style={{width: '18rem'}}>
                                <div className="card-body" key={index}>
                                    <h5 className="card-title">{element.title}</h5>
                                    <p>{element.timeLength}</p>
                                    <p>${element.price}</p>
                                    <button className="btn btn-primary" onClick={() => handleDetails(element._id)}>More Info</button>
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