import { useEffect, useState } from "react";

import { getProducts } from "../services/productService";

import Loader from "./Loader";

import EmptyState from "./EmptyState";
import ErrorState from "./ErrorState";
import ProductCard from "./ProductCard";

import "./ProductApp.css";


function ProductApp() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchProducts = async () => {

        setLoading(true);
        setError("");

        try {

            const data = await getProducts();

            if (!Array.isArray(data)) {
                throw new Error("Invalid product data received");
            }

            setProducts(data);

        } catch (error) {

            setError(
                error.message || "Unable to load products."
            );

            setProducts([]);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const renderContent = () => {

        if (loading) {
            return <Loader />;
        }

        if (error) {
            return (
                <ErrorState
                    message={error}
                    onRetry={fetchProducts}
                />
            );
        }

        if (products.length === 0) {
            return <EmptyState />;
        }

        return (
            <div className="product-grid">

                {products.map((product) => (
                    <ProductCard
                        key={product?.id}
                        product={product}
                    />
                ))}

            </div>
        );
    };

    return (
        <div className="app">

            <header className="app-header">
                <h1>Product Store</h1>

                <p>
                 LifeStyle Products
                </p>
            </header>

            <main className="container">

                <h2>Products</h2>

                {renderContent()}

            </main>

        </div>
    );
}

export default ProductApp;