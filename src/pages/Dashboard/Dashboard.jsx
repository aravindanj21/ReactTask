import { Link } from "react-router-dom";

function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (
        <div className="dashboard">

            <div className="dashboard-title">

                <h2>Dashboard</h2>

                <p>
                    Welcome, {user?.name || "User"}!
                </p>

            </div>


            <div className="dashboard-cards">

               
                <div className="dashboard-card">

                    <div className="card-icon">
                        👥
                    </div>

                    <div className="card-content">

                        <h3>Total Users</h3>

                        <p className="card-number">
                            120
                        </p>

                        <Link to="/dashboard/users">
                            View Users →
                        </Link>

                    </div>

                </div>


                
                <div className="dashboard-card">

                    <div className="card-icon">
                        🛒
                    </div>

                    <div className="card-content">

                        <h3>Total Orders</h3>

                        <p className="card-number">
                            350
                        </p>

                        <Link to="/dashboard/overview">
                            View Overview →
                        </Link>

                    </div>

                </div>


                
                <div className="dashboard-card">

                    <div className="card-icon">
                        ₹
                    </div>

                    <div className="card-content">

                        <h3>Total Revenue</h3>

                        <p className="card-number">
                            ₹85,000
                        </p>

                        <Link to="/dashboard/reports/sales">
                            View Sales →
                        </Link>

                    </div>

                </div>


                
                <div className="dashboard-card">

                    <div className="card-icon">
                        👤
                    </div>

                    <div className="card-content">

                        <h3>Your Role</h3>

                        <p className="card-number role-text">
                            {user?.role || "Guest"}
                        </p>

                        <Link to="/dashboard/settings/profile">
                            View Profile →
                        </Link>

                    </div>

                </div>

            </div>


           
            <div className="recent-section">

                <h2>Recent Activity</h2>

                <div className="activity-list">

                    <div className="activity-item">
                        <span>New user registered</span>
                        <small>5 minutes ago</small>
                    </div>

                    <div className="activity-item">
                        <span>New order received</span>
                        <small>20 minutes ago</small>
                    </div>

                    <div className="activity-item">
                        <span>Sales report updated</span>
                        <small>1 hour ago</small>
                    </div>

                    <div className="activity-item">
                        <span>Profile information updated</span>
                        <small>2 hours ago</small>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;