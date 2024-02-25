import {useLoaderData,useNavigate} from 'react-router-dom'; 

const UserData = () => {
    const user=useLoaderData();
    const {name,email}=user;
    const navigate =useNavigate();
    const handelData =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Details About User--</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={handelData}>Go back</button>
        </div>
    );
};

export default UserData;