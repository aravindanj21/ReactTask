import { lazy } from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";

import Login from "./pages/Login";
import AccessDenied from "./pages/AccessDenied";
import NotFound from "./components/NotFound";




const AdminDashboard = lazy(
    () => import("./pages/Dashboard/AdminDashboard")
);

const StaffDashboard = lazy(
    () => import("./pages/Dashboard/StaffDashboard")
);




const Overview = lazy(
    () => import("./pages/Dashboard/Overview")
);

const Users = lazy(
    () => import("./pages/Dashboard/Users")
);

const UserDetails = lazy(
    () => import("./pages/Dashboard/UserDetails")
);

const Sales = lazy(
    () => import("./pages/Dashboard/Sales")
);

const Activity = lazy(
    () => import("./pages/Dashboard/Activity")
);

const Profile = lazy(
    () => import("./pages/Dashboard/Profile")
);

const Security = lazy(
    () => import("./pages/Dashboard/Security")
);


function AppRoutes() {

    return (
        <Routes>

           
            <Route
                path="/login"
                element={<Login />}
            />



            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >

               

                <Route
                    index
                    element={
                        <Navigate
                            to="admin"
                            replace
                        />
                    }
                />



                <Route
                    path="admin"
                    element={
                        <RoleRoute
                            allowedRoles={["admin"]}
                        >
                            <AdminDashboard />
                        </RoleRoute>
                    }
                />


              

                <Route
                    path="staff"
                    element={
                        <RoleRoute
                            allowedRoles={["staff"]}
                        >
                            <StaffDashboard />
                        </RoleRoute>
                    }
                />


                

                <Route
                    path="overview"
                    element={<Overview />}
                />


               

                <Route path="users">

                    <Route
                        index
                        element={<Users />}
                    />

                    <Route
                        path=":userId"
                        element={<UserDetails />}
                    />

                </Route>


                

                <Route
                    path="reports"
                    element={
                        <RoleRoute
                            allowedRoles={["admin"]}
                        >
                            <Navigate
                                to="/dashboard/reports/sales"
                                replace
                            />
                        </RoleRoute>
                    }
                >

                    <Route
                        path="sales"
                        element={<Sales />}
                    />

                    <Route
                        path="activity"
                        element={<Activity />}
                    />

                </Route>


                

                <Route
                    path="settings"
                    element={
                        <Navigate
                            to="profile"
                            replace
                        />
                    }
                />


              

                <Route
                    path="settings/profile"
                    element={<Profile />}
                />


                

                <Route
                    path="settings/security"
                    element={
                        <RoleRoute
                            allowedRoles={["admin"]}
                        >
                            <Security />
                        </RoleRoute>
                    }
                />

            </Route>


          

            <Route
                path="/access-denied"
                element={<AccessDenied />}
            />



            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    );
}

export default AppRoutes;