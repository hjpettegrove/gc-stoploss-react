import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Error / Not Found</h2>
            <p>The resource you requested could not be found...</p>
            <Link to="/">Return to homepage...</Link>
        </div>
    );
}
 
export default NotFound;