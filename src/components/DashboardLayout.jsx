import {
    NavLink,
    Outlet,
    useNavigate
} from "react-router-dom";

import "./DashboardLayout.css";

function DashboardLayout() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    
    const dashboardPath =
        user?.role === "admin"
            ? "/dashboard/admin"
            : "/dashboard/staff";

    return (
        <div className="dashboard-layout">

          

            <header className="header">

                <div className="header-left">
                    <h1>
                    {user?.role === "admin"
                    ? "Admin Operations Portal"
                    : "Staff Operations Portal"}
                    </h1>
                </div>

                <div className="header-right">

                    <div className="user-info">

                        <span className="user-name">
                            {user?.name || "User"}
                        </span>

                        <span className="user-role">
                            {user?.role || "Guest"}
                        </span>

                    </div>

                    <button
                        className="logout-button"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </header>


            

            <div className="main-container">

               
                <aside className="sidebar">

                    <div className="sidebar-title">
                        <h2>Menu</h2>
                    </div>

                    <nav className="sidebar-nav">

                        

                        <NavLink
                            to={dashboardPath}
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            🏠 Dashboard
                        </NavLink>


                        

                        <NavLink
                            to="/dashboard/overview"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            📊 Overview
                        </NavLink>


                       

                        <NavLink
                            to="/dashboard/users"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            👥 Users
                        </NavLink>


                        

                        {user?.role === "admin" && (
                            <>

                                <div className="sidebar-section">
                                    Reports
                                </div>



                                <NavLink
                                    to="/dashboard/reports/sales"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    💰 Sales
                                </NavLink>


                               

                                <NavLink
                                    to="/dashboard/reports/activity"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    📈 Activity
                                </NavLink>


                                <div className="sidebar-section">
                                    Settings
                                </div>


                              

                                <NavLink
                                    to="/dashboard/settings/security"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    🔒 Security
                                </NavLink>

                            </>
                        )}


                        

                        <NavLink
                            to="/dashboard/settings/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            👤 Profile
                        </NavLink>

                    </nav>

                </aside>


               

                <main className="content">

                    <div className="navigation-buttons">

                        

                        <button
                            onClick={() => navigate(-1)}
                        >
                            ← Back
                        </button>


                      
                        <button
                            onClick={() => navigate(1)}
                        >
                            Forward →
                        </button>



                        <button
                            onClick={() =>
                                navigate(dashboardPath)
                            }
                        >
                            Dashboard
                        </button>

                    </div>


                    <Outlet />

                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;