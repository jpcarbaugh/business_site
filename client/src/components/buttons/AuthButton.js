import { navigate } from "@reach/router";
import axios from "axios";

const AuthButton = (props) => {

    const {isLoggedIn, setIsLoggedIn} = props;

    const handleLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true })
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch((err) => console.log(err));
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
        return <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
    } else {
        return <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
    }
}

export default AuthButton;