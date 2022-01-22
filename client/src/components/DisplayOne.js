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
        <div>
            <h4>{title}</h4>
            <table className="table">
                <tbody>
                    <tr>
                        <td>{timeLength}</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </table>
            <t6>Service Description</t6>
            <p>{description}</p>
        </div>
    )

};

export default DisplayOne;