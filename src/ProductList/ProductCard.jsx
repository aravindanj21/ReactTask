function ProductCard({ product }) {

    return (
        <div className="product-card">

            <img
                src={product?.thumbnail || "/placeholder.png"}
                alt={product?.title || "Product"}
            />

            <h3>
                {product?.title || "Unnamed Product"}
            </h3>

            <p>
                {product?.description || "No description available"}
            </p>

            <strong>
                ₹{product?.price ?? "N/A"}
            </strong>

        </div>
    );
}

export default ProductCard;