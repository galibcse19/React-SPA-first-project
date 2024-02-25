import {useLoaderData} from 'react-router-dom';
import Post from '../Post/Post';
const Posts = () => {
    const posts=useLoaderData();
    return (
        <div>
            <p>Length: {posts.length}</p>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;