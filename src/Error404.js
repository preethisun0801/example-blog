import {Link} from "react-router-dom";
const Error404 = () => {
    return (
        <div className="not-found">
            <h2>Sorry :(</h2>
            <p>The page you requested cannot be found.</p>
            <Link to="/">Back to Home Page</Link>
        </div>
    );
}
 
export default Error404;