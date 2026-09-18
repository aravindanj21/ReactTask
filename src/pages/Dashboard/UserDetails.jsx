import {
    Link,
    useLocation,
    useParams
} from "react-router-dom";

function UserDetails() {

    const { userId } = useParams();

    const location = useLocation();

    const previousFilters =
        location.state?.searchParams || "";

    return (
        <div>

            <h2>User Details</h2>

            <p>
                User ID: {userId}
            </p>

            <p>
                Name: User {userId}
            </p>

            <p>
                Email: user{userId}@example.com
            </p>

            <Link
                to={`/dashboard/users?${previousFilters}`}
            >
                ← Back to Users
            </Link>

        </div>
    );
}

export default UserDetails;

