"use client";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

export default function Shopping_items() {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const doc = new jsPDF();

    const [addedItemIds, setAddedItemIds] = useState([]);
    const [showOrderPopup, setShowOrderPopup] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://dummyjson.com/products");
            const json = await response.json();
            setData(json.products);

            const uniqueCategories = [...new Set(json.products.map(item => item.category))];
            setCategories(uniqueCategories);
        }
        fetchProducts();
    }, []);

    const filteredProducts =
        activeCategory === "all"
            ? data
            : data.filter((item) => item.category === activeCategory);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });

        setAddedItemIds((prev) => [...prev, product.id]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    // Convert image to base64 for jsPDF
    const toBase64 = (url) =>
        fetch(url)
            .then((response) => response.blob())
            .then(
                (blob) =>
                    new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    })
            );

    // ===============================
    // UPDATED INVOICE FUNCTION (with LOGO)
    // ===============================
    const download = async () => {
        const { jsPDF } = await import("jspdf");
        const doc = new jsPDF();
        let y = 20;

        // Load your TrendOra logo
        const logoBase64 = await toBase64("/Images/Logo1.png");

        // Header background
        doc.setFillColor(37, 99, 235);  // Tailwind blue-600
        doc.rect(0, 0, 210, 45, "F");


        // Add Logo (left side)
        doc.addImage(logoBase64, "PNG", 10, 8, 25, 25);

        // Main Title
        doc.setTextColor(255, 255, 255);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(32);
        doc.text("TrendOra", 110, 20, { align: "center" });

        doc.setFontSize(11);
        doc.setFont("Helvetica", "normal");
        doc.text("AI-Powered Smart Shopping Experience", 110, 28, { align: "center" });

        doc.setFontSize(9);
        doc.text("www.trendora.com | support@trendora.com | +91-XXXX-XXXXXX", 110, 35, {
            align: "center",
        });

        y = 55;

        doc.setTextColor(0, 0, 0);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(24);
        doc.text("INVOICE", 10, y);

        doc.setFontSize(10);
        doc.setFont("Helvetica", "normal");
        const invoiceNumber = `INV-${Date.now().toString().slice(-8)}`;
        const invoiceDate = new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        doc.text(`Invoice No: ${invoiceNumber}`, 200, y, { align: "right" });
        doc.text(`Date: ${invoiceDate}`, 200, y + 6, { align: "right" });

        y += 20;

        doc.setDrawColor(220, 220, 220);
        doc.setLineWidth(0.5);
        doc.rect(10, y, 190, 20);

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(11);
        doc.text("BILL TO:", 15, y + 7);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        doc.text("Customer Name", 15, y + 13);

        y += 30;

        doc.setFillColor(240, 240, 240);
        doc.rect(10, y, 190, 8, "F");

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(12);
        doc.text("ITEM DESCRIPTION", 15, y + 7);
        doc.text("QTY", 145, y + 7, { align: "center" });
        doc.text("PRICE", 165, y + 7, { align: "center" });
        doc.text("AMOUNT", 198, y + 7, { align: "right" });

        y += 12;

        cartItems.forEach((item, index) => {
            doc.setDrawColor(220, 220, 220);
            doc.setLineWidth(0.3);
            doc.rect(10, y - 5, 190, 8);

            const name = item.title.length > 45 ? item.title.slice(0, 45) + "..." : item.title;

            doc.text(`${index + 1}. ${name}`, 15, y);
            doc.text(`${item.quantity}`, 145, y, { align: "center" });
            doc.text(`₹${item.price}`, 165, y, { align: "center" });
            doc.text(`₹${item.price * item.quantity}`, 195, y, { align: "right" });

            y += 8;

            if (y > 260) {
                doc.addPage();
                y = 20;
            }
        });

        y += 5;

        const totalPrice = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        doc.line(120, y, 200, y);
        y += 8;

        doc.text("Subtotal:", 130, y);
        doc.text(`₹${totalPrice}`, 195, y, { align: "right" });
        y += 8;

        doc.setFillColor(79, 70, 229);
        doc.rect(120, y - 5, 98, 12, "F");

        doc.setTextColor(255, 255, 255);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(14);
        doc.text("TOTAL:", 130, y + 3);
        doc.text(`₹${totalPrice}`, 195, y + 3, { align: "right" });

        doc.save(`TrendOra_Invoice_${invoiceNumber}.pdf`);
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="p-10 min-h-screen bg-gradient-to-b from-[#EEF1F5] to-[#CBD5E1]">

            {/* Header */}
            <div className="flex items-center mb-10">
                <h1 className="text-4xl ml-24 md:text-6xl font-extrabold tracking-wide leading-tight bg-gradient-to-r from-[#c83420] via-[#1d528f] to-[#f33fdb] text-transparent bg-clip-text">
                    Shop by Category
                </h1>

                {/* Cart */}
                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="relative bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-white  p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
                >
                    🛒
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                            {cartItems.length}
                        </span>
                    )}
                </button>
            </div>

            {/* CART SIDEBAR */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-20 z-40"
                    onClick={() => setIsCartOpen(false)}
                ></div>
            )}

            <div
                className={`fixed top-0  right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"
                    } overflow-y-auto`}
            >
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

                    {/* Empty Cart */}
                    {cartItems.length === 0 ? (
                        <p className="text-gray-600 text-center mt-10">Your cart is empty</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
                                    <img src={item.thumbnail} className="w-16 h-16 rounded" />
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.title}</p>
                                        <p>₹{item.price} × {item.quantity}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xl">
                                        🗑️
                                    </button>
                                </div>
                            ))}

                            {/* Total */}
                            <div className="pt-4 border-t-2">
                                <p className="text-2xl font-bold">Total: ₹{totalPrice}</p>

                                {/* Checkout Button */}
                                <button
                                    onClick={() => setShowOrderPopup(true)}
                                    className="w-full mt-4 bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-black py-3 rounded-full font-bold hover:scale-105 transition-all"
                                >
                                    Checkout
                                </button>

                                {/* Invoice Button */}
                                <button
                                    onClick={download}
                                    className="w-full mt-3 bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-black py-3 rounded-full font-bold hover:scale-105 transition-all"
                                >
                                    Get Your Invoice
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* CATEGORY BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
                <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-6 py-2 rounded-full font-semibold ${activeCategory === "all"
                            ? "bg-gradient-to-r from-[#86A8E7] to-[#91EAE4] text-white scale-110"
                            : "bg-white/60 border"
                        }`}
                >
                    All Products
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full font-semibold ${activeCategory === cat
                                ? "bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-white scale-110"
                                : "bg-white/70 border"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {filteredProducts.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all"
                    >
                        <img src={item.thumbnail} className="w-full h-48 object-cover rounded-xl" />

                        <h2 className="text-lg font-bold mt-4">{item.title}</h2>

                        <p className="text-sm text-[#7F7FD5] capitalize">{item.category}</p>

                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="font-extrabold text-xl">₹{item.price}</p>

                            {/* ADD TO CART BUTTON */}
                            <button
                                onClick={() => addToCart(item)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${addedItemIds.includes(item.id)
                                        ? "bg-green-600 text-white scale-105"
                                        : "bg-blue-900 text-white hover:bg-blue-800"
                                    }`}
                            >
                                {addedItemIds.includes(item.id)
                                    ? "Added to cart ✓"
                                    : "Add to cart"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ORDER PLACED POPUP */}
            {showOrderPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[9999]">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] sm:w-[400px] text-center animate-fadeIn">

                        <div className="text-green-600 text-6xl mb-4">✓</div>

                        <h2 className="text-2xl font-extrabold text-gray-800">
                            Order Placed Successfully!
                        </h2>

                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                            Thank you for shopping with{" "}
                            <span className="font-semibold">TrendOra</span>.
                            Your order has been received.
                        </p>

                        <button
                            onClick={() => setShowOrderPopup(false)}
                            className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-white font-bold hover:scale-105 transition-all"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
