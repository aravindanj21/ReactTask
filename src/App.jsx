import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import ProductManagement from "./pages/ProductManagement/ProductManagement";
import KanbanPage from "./pages/KanbanPage";
import ProductApp from "./ProductList/ProductApp";

import AppRoutes from "./AppRoutes";
import Loading from "./components/Loading";

function App() {
    return (
        <BrowserRouter>

            <Suspense fallback={<Loading />}>

                <Routes>

                    

                    <Route
                        path="/products"
                        element={<ProductManagement />}
                    />

                    <Route
                        path="/kanban"
                        element={<KanbanPage />}
                    />

                    <Route
                        path="/productapp"
                        element={<ProductApp />}
                    />

                   
                    <Route
                        path="*"
                        element={<AppRoutes />}
                    />

                </Routes>

            </Suspense>

        </BrowserRouter>
    );
}

export default App;

