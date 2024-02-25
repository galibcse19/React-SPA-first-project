 

const Post = ({post}) => {
    const {id,title,body}=post;
    return (
        <div>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>{body}</p>
        </div>
    );
};

export default Post;