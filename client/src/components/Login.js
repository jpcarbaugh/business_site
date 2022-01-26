import axios from "axios";
import { useState } from "react";
import { navigate } from "@reach/router";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const {setIsLoggedIn} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors("");
        const postData = {
            email,
            password
        };
        axios.post("http://localhost:8000/api/login", postData, {
            withCredentials: true
        })
        .then((res) => {
            console.log("Success");
            navigate("/services")
        })
        .catch((err) => setErrors(err.response.data.errors));
        setIsLoggedIn(true);
    };

    return (
        <div className="container">
            <div className="col-6" style={{marginLeft: "325px", marginTop: "50px"}}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                        {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                        {errors.name && (<p style={{color: "red"}}>{errors.name.message}</p>)}
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;