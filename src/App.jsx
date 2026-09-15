import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductManagement from "./pages/ProductManagement/ProductManagement";

import KanbanPage from "./pages/KanbanPage";
import ProductApp from "./ProductList/ProductApp";


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

               <Route
                    path="/productapp"
                    element={<ProductApp/>}
               />

                

            </Routes>

        </BrowserRouter>
    );
}

export default App;