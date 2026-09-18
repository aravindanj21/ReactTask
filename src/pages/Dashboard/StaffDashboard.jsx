function StaffDashboard() {
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (
        <div className="dashboard">
            <h2>Staff Dashboard</h2>

            <p>
                Welcome, {user?.name || "Staff"}!
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h3>My Tasks</h3>
                    <p>15</p>
                </div>

                <div className="dashboard-card">
                    <h3>Pending Orders</h3>
                    <p>25</p>
                </div>

                <div className="dashboard-card">
                    <h3>Completed Tasks</h3>
                    <p>40</p>
                </div>

            </div>
        </div>
    );
}

export default StaffDashboard;