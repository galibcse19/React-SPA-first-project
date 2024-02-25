import { Link,useNavigate } from "react-router-dom";

const User = ({user}) => {
    const navigate= useNavigate();
    const {id,name,email,phone}=user;

    const handelar=()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div>
            <h2>Id: {id}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handelar}>Click for details</button>
        </div>
    );
};

export default User;