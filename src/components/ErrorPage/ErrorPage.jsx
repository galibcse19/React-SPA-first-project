 import {Link, useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            OPPS!!
            <p>{error.statusText || error.massage}</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;