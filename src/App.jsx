import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductManagement from "./pages/ProductManagement/ProductManagement";

import KanbanPage from "./pages/KanbanPage";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                

                <Route
                    path="/products"
                    element={<ProductManagement />}
                />

                <Route
                    path="/kanban"
                    element={<KanbanPage />}
                />

                

            </Routes>

        </BrowserRouter>
    );
}

export default App;