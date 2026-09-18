import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {

    const location = useLocation();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    return children;
}

export default ProtectedRoute;

