import { navigate } from "@reach/router";
import axios from "axios";

const DisplayButton = (props) => {

    const {isLoggedIn, elementId} = props;

    //handles the redirect to the display of a single service
    const handleDetails = (elementId) => {
        navigate(`/services/${elementId}`);
    };
    
    //handles the redirect to edit a single service
    const handleEdit = (elementId) => {
        navigate(`/services/${elementId}/edit`);
    };

    //handles the deletion of a single service
    const handleDelete = (elementId) => {
        axios.delete(`http://localhost:8000/api/service/${elementId}`, {}, { withCredentials: true })
        .then((res) => {
            console.log(res)
            navigate("/services")
        })
        .catch((err) => console.log(err));
    };

    if (isLoggedIn) {
        return (
            <>
                <button className="btn btn-primary" onClick={() => handleDetails(elementId)}>More Info</button>
                <button className="btn btn-warning" style={{margin: "4px"}} onClick={() => handleEdit(elementId)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(elementId)}>Delete</button>
            </>
        )} else {
        return <button className="btn btn-primary" onClick={() => handleDetails(elementId)}>More Info</button>
    }
}

export default DisplayButton;