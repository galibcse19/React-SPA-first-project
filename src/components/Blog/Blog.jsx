import {useLoaderData} from 'react-router-dom';
import User from '../User/User';

const Blog = () => {
    const users= useLoaderData();
    return (
        <div>
            This is blog Page.
            <p>Users: {users.length}</p>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Blog;