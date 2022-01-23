import { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeLength, setTimeLength] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({});

    //This handles the submit to the backend
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            description,
            timeLength,
            price
        };
        axios.post("http://localhost:8000/api/service", postData)
        .then((res) => {
            console.log("Success", res);
            navigate("/services");
        })
        .catch((err) => {
            console.log("Error", err.response.data);
            setErrors(err.response.data.errors);
        });
    };

    return (
        <div className="col-6">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" id="title" className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div>
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" id="description" className="form-control" onChange={(e) => setDescription(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div>
                    <label htmlFor="timeLength" className="form-label">Length of time:</label>
                    <input type="text" id="timeLength" className="form-control" onChange={(e) => setTimeLength(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div>
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="text" id="price" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div style={{marginTop: '15px'}}>
                    <button className="btn btn-primary">Add Service</button>
                </div>
            </form>
        </div>
    )
};

export default Form;