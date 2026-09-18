import { Link } from "react-router-dom";

function AccessDenied() {

    return (
        <div className="error-page">

            <h1>Access Denied</h1>

            <p>
                You do not have permission to access
                this page.
            </p>

            <Link to="/dashboard">
                Go to Dashboard
            </Link>

        </div>
    );
}

export default AccessDenied;
