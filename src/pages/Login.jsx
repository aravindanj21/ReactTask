import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
   
    const [role, setRole] = useState("admin");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const credentials = {
        admin: {
            mobile: "9876543210",
            password: "admin123",
            name: "Admin User"
        },
        staff: {
            mobile: "9876543211",
            password: "staff123",
            name: "Staff User"
        }
    };

    const login = () => {
    setError("");

    const user = credentials[role];

    if (mobile !== user.mobile) {
        setError("Invalid mobile number");
        return;
    }

    if (password !== user.password) {
        setError("Invalid password");
        return;
    }

    const loggedInUser = {
        name: user.name,
        role: role,
        mobile: mobile
    };

    localStorage.setItem(
        "user",
        JSON.stringify(loggedInUser)
    );

    
    if (role === "admin") {
    navigate("/dashboard/admin", { replace: true });
} else {
    navigate("/dashboard/staff", { replace: true });
}
    
    
};

    return (
        <div className="login-page">

            <div className="login-box">

                <h1>Login</h1>

                <select
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value);
                        setError("");
                    }}
                >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                </select>

                <input
                    type="text"
                    placeholder="Mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p className="error-message">
                        {error}
                    </p>
                )}

                <button onClick={login}>
                    Log In
                </button>

                <hr />

                <p className="login-info">
                    Login as Admin or Staff
                </p>

            </div>

        </div>
    );
}

export default Login;