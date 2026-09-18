import { Navigate, NavLink } from "react-router-dom";

function RoleRoute({ children, allowedRoles }) {
    
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    if (!allowedRoles.includes(user.role))  {
        return (
            <Navigate
            to="/access-denied"
            replace
            />
        );
    }

    return children;
}

export default RoleRoute;