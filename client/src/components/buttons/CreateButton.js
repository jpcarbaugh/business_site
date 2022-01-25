import { navigate } from "@reach/router";

const CreateButton = (props) => {

    const {isLoggedIn} = props;

    const handleCreate = () => {
        navigate('/new');
    };

    if (isLoggedIn) {
        return <button className="btn btn-primary" onClick={() => handleCreate()}>New Service</button>
    } else {
        return null;
    }
};

export default CreateButton;