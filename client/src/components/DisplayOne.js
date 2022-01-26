import { navigate } from "@reach/router";
import axios from "axios";
import { useState, useEffect } from "react";

const DisplayOne = (props) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeLength, setTimeLength] = useState("");
    const [price, setPrice] = useState("");

    //This makes an API call to the database to pull in the current data for one service
    useEffect(() => {
        axios.get(`http://localhost:8000/api/service/${props.id}`)
        .then((res) => {
            //console logging response data to see if form is correct
            console.log(res.data);
            setId(res.data._id);
            setTitle(res.data.title);
            setDescription(res.data.description);
            setTimeLength(res.data.timeLength);
            setPrice(res.data.price);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <h4 style={{marginTop: "25px"}}>{title}</h4>
            <div className="panel text-center text-white bg-secondary" style={{width: '8rem', marginLeft: "580px", marginTop: "25px"}}>
                <div className="panel-body">
                    <p>{timeLength} | {price}</p>
                </div>
            </div>
            <h6 style={{marginTop: "25px"}}>Service Description</h6>
            <p style={{marginTop: "25px"}}>{description}</p>
        </div>
    )

};

export default DisplayOne;