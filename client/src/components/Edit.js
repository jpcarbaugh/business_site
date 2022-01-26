import { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router"

const Edit = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeLength, setTimeLength] = useState("");
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({});

    //This makes an API call to the database to pull in the current data for one service
    useEffect(() => {
        axios.get(`http://localhost:8000/api/service/${props.id}`)
        .then((res) => {
            setTitle(res.data.title);
            setDescription(res.data.description);
            setTimeLength(res.data.timeLength);
            setPrice(res.data.price);
        })
        .catch(err => console.log(err));
    }, []);

    //This handles the submit to the backend
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            description,
            timeLength,
            price
        };
        axios.put(`http://localhost:8000/api/service/${props.id}`, postData)
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
        <div className="col-6" style={{marginLeft: "400px", marginTop: "50px"}}>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" id="title" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div>
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" id="description" value={description} className="form-control" onChange={(e) => setDescription(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div>
                    <label htmlFor="timeLength" className="form-label">Length of time:</label>
                    <input type="text" id="timeLength" value={timeLength} className="form-control" onChange={(e) => setTimeLength(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div>
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="text" id="price" value={price} className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                    {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                </div>
                <div style={{marginTop: '15px'}}>
                    <button className="btn btn-primary">Update Service</button>
                </div>
            </form>
        </div>
    )
};

export default Edit;