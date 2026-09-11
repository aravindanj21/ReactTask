import { useState } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Dropdown from "../../components/Dropdown";
import Badge from "../../components/Badge";
import ConfirmDialog from "../../components/ConfirmDialog";
import EmptyState from "../../components/EmptyState";

import "../ProductManagement.css";

function ProductManagement() {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Tomato",
            price: 40,
            category: "Vegetables",
            status: "Active"
        },
        {
            id: 2,
            name: "Apple",
            price: 120,
            category: "Fruits",
            status: "Active"
        },
        {
            id: 3,
            name: "Rice",
            price: 80,
            category: "Grains",
            status: "Inactive"
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Vegetables");

    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");

    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 2;


    
    const handleAdd = () => {

        setSelectedProduct(null);

        setName("");
        setPrice("");
        setCategory("Vegetables");

        setIsModalOpen(true);
    };


    const handleEdit = (product) => {

        setSelectedProduct(product);

        setName(product.name);
        setPrice(product.price);
        setCategory(product.category);

        setIsModalOpen(true);
    };


    const handleSave = () => {

        if (!name || !price) {

            alert("Please fill all fields");

            return;
        }


       
        if (selectedProduct) {

            setProducts(
                products.map((product) =>
                    product.id === selectedProduct.id
                        ? {
                            ...product,
                            name,
                            price,
                            category
                        }
                        : product
                )
            );

        }

       
        else {

            const newProduct = {
                id: Date.now(),
                name,
                price,
                category,
                status: "Active"
            };

            setProducts([
                ...products,
                newProduct
            ]);
        }

        setIsModalOpen(false);
    };


    
    const handleDeleteClick = (product) => {

        setSelectedProduct(product);

        setIsConfirmOpen(true);
    };


    
    const handleDelete = () => {

        setProducts(
            products.filter(
                (product) =>
                    product.id !== selectedProduct.id
            )
        );

        setIsConfirmOpen(false);
    };


    
    const filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            filterCategory === "All" ||
            product.category === filterCategory;

        return matchesSearch && matchesCategory;
    });


    
    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    const startIndex =
        (currentPage - 1) * productsPerPage;

    const paginatedProducts =
        filteredProducts.slice(
            startIndex,
            startIndex + productsPerPage
        );


    
    const columns = [

        {
            key: "name",
            label: "Product Name"
        },

        {
            key: "price",
            label: "Price",

            render: (product) =>
                `₹${product.price}`
        },

        {
            key: "category",
            label: "Category"
        },

        {
            key: "status",
            label: "Status",

            render: (product) => (

                <Badge
                    variant={
                        product.status === "Active"
                            ? "success"
                            : "danger"
                    }
                >
                    {product.status}
                </Badge>

            )
        },

        {
            key: "actions",
            label: "Actions",

            render: (product) => (

                <Dropdown>

                    <button
                        onClick={() =>
                            handleEdit(product)
                        }
                    >
                        Edit
                    </button>

                    <button
                        onClick={() =>
                            handleDeleteClick(product)
                        }
                    >
                        Delete
                    </button>

                </Dropdown>

            )
        }

    ];


    return (

        <div className="product-management">

            <header className="product-header">

                <h1>
                    Product Management Dashboard
                </h1>

            </header>


            <main className="container">

                

                <div className="toolbar">

                    <div className="search-box">

                        <Input
                            label="Search"
                            value={search}

                            onChange={(e) => {

                                setSearch(e.target.value);

                                setCurrentPage(1);

                            }}

                            placeholder="Search products..."
                        />

                    </div>


                    <div className="category-box">

                        <Select
                            label="Category"
                            value={filterCategory}

                            onChange={(e) => {

                                setFilterCategory(
                                    e.target.value
                                );

                                setCurrentPage(1);

                            }}

                            options={[
                                {
                                    value: "All",
                                    label: "All Categories"
                                },
                                {
                                    value: "Vegetables",
                                    label: "Vegetables"
                                },
                                {
                                    value: "Fruits",
                                    label: "Fruits"
                                },
                                {
                                    value: "Grains",
                                    label: "Grains"
                                }
                            ]}
                        />

                    </div>


                    <Button onClick={handleAdd}>

                        + Add Product

                    </Button>

                </div>


                

                <div className="card">

                    <h2>
                        Products
                    </h2>


                    {paginatedProducts.length === 0 ? (

                        <EmptyState
                            title="No Products Found"
                            message="Try adding a new product."
                        />

                    ) : (

                        <Table
                            columns={columns}
                            data={paginatedProducts}
                        />

                    )}

                </div>


                

                {totalPages > 0 && (

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />

                )}

            </main>


            

            <Modal
                isOpen={isModalOpen}

                onClose={() =>
                    setIsModalOpen(false)
                }

                title={
                    selectedProduct
                        ? "Edit Product"
                        : "Add Product"
                }
            >

                <Input
                    label="Product Name"
                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }

                    placeholder="Enter product name"
                />


                <Input
                    label="Price"
                    type="number"
                    value={price}

                    onChange={(e) =>
                        setPrice(e.target.value)
                    }

                    placeholder="Enter price"
                />


                <Select
                    label="Category"
                    value={category}

                    onChange={(e) =>
                        setCategory(e.target.value)
                    }

                    options={[
                        {
                            value: "Vegetables",
                            label: "Vegetables"
                        },
                        {
                            value: "Fruits",
                            label: "Fruits"
                        },
                        {
                            value: "Grains",
                            label: "Grains"
                        }
                    ]}
                />


                <div className="dialog-actions">

                    <Button
                        variant="secondary"

                        onClick={() =>
                            setIsModalOpen(false)
                        }
                    >
                        Cancel
                    </Button>


                    <Button onClick={handleSave}>

                        Save Product

                    </Button>

                </div>

            </Modal>


           

            <ConfirmDialog
                isOpen={isConfirmOpen}

                onClose={() =>
                    setIsConfirmOpen(false)
                }

                onConfirm={handleDelete}

                title="Delete Product"

                message="Are you sure you want to delete this product?"
            />

        </div>

    );
}

export default ProductManagement;