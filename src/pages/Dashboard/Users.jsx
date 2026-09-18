import {
    Link,
    useSearchParams
} from "react-router-dom";

const users = [
    {
        id: 1,
        name: "jothi",
        email: "jothi@example.com",
        role: "admin"
    },
    {
        id: 2,
        name: "sita",
        email: "sita@example.com",
        role: "staff"
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@example.com",
        role: "staff"
    },
    {
        id: 4,
        name: "Ram",
        email: "ram@example.com",
        role: "admin"
    }
];

function Users() {

    const [searchParams, setSearchParams] =
        useSearchParams();

    const search =
        searchParams.get("search") || "";

    const role =
        searchParams.get("role") || "all";

    const filteredUsers = users.filter((user) => {

        const matchesSearch =
            user.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesRole =
            role === "all" ||
            user.role === role;

        return matchesSearch && matchesRole;
    });

    const handleSearch = (value) => {

        const params = new URLSearchParams(
            searchParams
        );

        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        setSearchParams(params);
    };

    const handleRole = (value) => {

        const params = new URLSearchParams(
            searchParams
        );

        if (value !== "all") {
            params.set("role", value);
        } else {
            params.delete("role");
        }

        setSearchParams(params);
    };

    return (
        <div>

            <h2>Users</h2>

            <div className="filters">

                <input
                    value={search}
                    onChange={(e) =>
                        handleSearch(e.target.value)
                    }
                    placeholder="Search users..."
                />

                <select
                    value={role}
                    onChange={(e) =>
                        handleRole(e.target.value)
                    }
                >
                    <option value="all">
                        All Roles
                    </option>

                    <option value="admin">
                        Admin
                    </option>

                    <option value="staff">
                        Staff
                    </option>
                </select>

            </div>

            <div className="user-list">

                {filteredUsers.map((user) => (

                    <div
                        className="user-card"
                        key={user.id}
                    >

                        <h3>{user.name}</h3>

                        <p>{user.email}</p>

                        <p>
                            Role: {user.role}
                        </p>

                        <Link
                            to={`/dashboard/users/${user.id}`}
                            state={{
                                searchParams:
                                    searchParams.toString()
                            }}
                        >
                            View Details
                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Users;

