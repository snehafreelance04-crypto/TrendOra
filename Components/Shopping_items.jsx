"use client";

import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

export default function Shopping_items() {

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [addedItemIds, setAddedItemIds] = useState([]);

    const [showCreatePopup, setShowCreatePopup] = useState(false);

    // ❌ IMAGE FIELD REMOVED
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: ""
    });


    // FETCH PRODUCTS
    const fetchProducts = async () => {

        try {

            const response =
                await fetch("http://localhost:5000/api/products");

            const json = await response.json();

            setData(json);

            const uniqueCategories =
                [...new Set(json.map(item => item.category))];

            setCategories(uniqueCategories);

        }
        catch (error) {

            console.error("Fetch error:", error);

        }

    };


    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {

        const savedCart = localStorage.getItem("cart");

        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }

    }, []);

    useEffect(() => {

        if (cartItems.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }

    }, [cartItems]);



    // CREATE PRODUCT
    const createProduct = async () => {

        try {

            const response =
                await fetch("http://localhost:5000/api/products", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: newProduct.name,
                        category: newProduct.category,
                        price: Number(newProduct.price)
                    })

                });

            await response.json();

            setShowCreatePopup(false);

            setNewProduct({
                name: "",
                category: "",
                price: ""
            });

            fetchProducts();

        }
        catch (error) {

            console.error("Create error:", error);

        }

    };



    // FILTER PRODUCTS
    const filteredProducts =
        activeCategory === "all"
            ? data
            : data.filter(
                item => item.category === activeCategory
            );



    // ADD TO CART
    const addToCart = (product) => {

        setCartItems(prev => {

            const existing =
                prev.find(item => item._id === product._id);

            if (existing) {

                return prev.map(item =>
                    item._id === product._id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );

            }

            return [...prev, { ...product, quantity: 1 }];

        });

        setAddedItemIds(prev =>
            [...prev, product._id]
        );

    };



    // REMOVE FROM CART
    const removeFromCart = (id) => {

        setCartItems(prev =>
            prev.filter(item => item._id !== id)
        );

    };



    // PDF DOWNLOAD
    const download = async () => {

        const doc = new jsPDF();

        let y = 20;

        doc.text("TrendOra Invoice", 70, y);

        y += 20;

        cartItems.forEach(item => {

            doc.text(
                `${item.name} x${item.quantity}`,
                10,
                y
            );

            doc.text(
                `₹${item.price * item.quantity}`,
                150,
                y
            );

            y += 10;

        });

        doc.save("invoice.pdf");

    };



    const totalPrice =
        cartItems.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );



    return (

        <div className="p-10">


            {/* HEADER */}
            <div className="flex items-center mb-10">

                <button
                    onClick={() => setShowCreatePopup(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Create
                </button>


                <h1 className="text-4xl ml-10">
                    Shop by Category
                </h1>


                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="ml-auto bg-blue-500 text-white p-3 rounded"
                >
                    Cart ({cartItems.length})
                </button>

            </div>



            {/* CATEGORY FILTER */}
            <div className="flex gap-3 mb-6">

                <button
                    onClick={() => setActiveCategory("all")}
                    className="bg-gray-200 px-3 py-1 rounded"
                >
                    All
                </button>

                {categories.map(cat => (

                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="bg-gray-200 px-3 py-1 rounded"
                    >
                        {cat}
                    </button>

                ))}

            </div>



            {/* CART */}
            {isCartOpen && (

                <div className="fixed right-0 top-0 bg-white w-80 h-full p-5 shadow">

                    <h2 className="text-xl font-bold mb-4">
                        Cart
                    </h2>

                    {cartItems.map(item => (

                        <div key={item._id} className="mb-2">

                            <p>{item.name}</p>

                            <p>
                                ₹{item.price} × {item.quantity}
                            </p>

                            <button
                                onClick={() =>
                                    removeFromCart(item._id)
                                }
                                className="text-red-500"
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                    <p className="font-bold mt-4">
                        Total ₹{totalPrice}
                    </p>

                    <button
                        onClick={download}
                        className="bg-green-500 text-white p-2 mt-3"
                    >
                        Download Invoice
                    </button>

                </div>

            )}



            {/* PRODUCTS */}
            <div className="grid grid-cols-4 gap-5">

                {filteredProducts.map(item => (

                    <div
                        key={item._id}
                        className="border p-3 rounded"
                    >

                        <h2 className="font-bold">
                            {item.name}
                        </h2>

                        <p>{item.category}</p>

                        <p>₹{item.price}</p>

                        <button
                            onClick={() => addToCart(item)}
                            className="bg-blue-500 text-white p-2 mt-2"
                        >
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>



            {/* CREATE PRODUCT POPUP */}
            {showCreatePopup && (

                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

                    <div className="bg-white p-6 w-96 rounded">

                        <h2 className="text-xl font-bold mb-3">
                            Create Product
                        </h2>


                        <input
                            placeholder="Name"
                            className="border p-2 w-full mb-2"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    name: e.target.value
                                })
                            }
                        />


                        <input
                            placeholder="Category"
                            className="border p-2 w-full mb-2"
                            value={newProduct.category}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    category: e.target.value
                                })
                            }
                        />


                        <input
                            placeholder="Price"
                            className="border p-2 w-full mb-3"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    price: e.target.value
                                })
                            }
                        />


                        <div className="flex gap-3">

                            <button
                                onClick={createProduct}
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>


                            <button
                                onClick={() => setShowCreatePopup(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}