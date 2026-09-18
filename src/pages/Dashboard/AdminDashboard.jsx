function AdminDashboard() {
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (
        <div className="dashboard">
            <h2>Admin Dashboard</h2>

            <p>
                Welcome, {user?.name || "Admin"}!
            </p>

            <div className="dashboard-cards">

                <div className="dashboard-card">
                    <h3>Total Users</h3>
                    <p>120</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Orders</h3>
                    <p>350</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Revenue</h3>
                    <p>₹85,000</p>
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;