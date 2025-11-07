import React, { useState } from "react";

function Addcart() {
  const [orderType, setOrderType] = useState("dinein");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

 
  const items = [
    { id: 1, name: "Veg Pizza", price: 200, img: "Images/PIZZ2.jpg" },
    { id: 2, name: "Burger Combo", price: 150, img: "Images/burger.jpeg" },
  ];

 
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const gst = subtotal * 0.05; // 5% GST
  const total = subtotal + gst;

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 5000); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

    
      <div className="flex space-x-4 mb-8">
        {["dinein", "pickup", "delivery"].map((type) => (
          <button
            key={type}
            onClick={() => setOrderType(type)}
            className={`px-6 py-2 rounded-full font-medium border ${
              orderType === type
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {type === "dinein"
              ? "Dine In"
              : type === "pickup"
              ? "Pickup"
              : "Delivery"}
          </button>
        ))}
      </div>

     
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-40 w-40 object-cover rounded-lg"
            />
            <h2 className="mt-3 font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
          </div>
        ))}
      </div>

    
      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between mb-2">
          <p>Subtotal:</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>GST (5%):</p>
          <p>₹{gst.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <p>Total:</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white w-full max-w-md rounded-xl shadow-md p-6 mb-6">
        <h3 className="font-semibold mb-3">Select Payment Method</h3>
        <div className="space-y-3">
          {["Cash on Delivery", "UPI", "Credit/Debit Card"].map((method) => (
            <button
              key={method}
              onClick={() => setPaymentMethod(method)}
              className={`w-full py-2 rounded-xl border font-medium ${
                paymentMethod === method
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Confirm Order */}
      <button
        onClick={handleConfirmOrder}
        disabled={!paymentMethod}
        className={`px-8 py-3 rounded-xl font-semibold ${
          paymentMethod
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
      >
        Confirm Order
      </button>

    
      {orderConfirmed && (
        <div className="mt-6 bg-green-100 text-green-800 px-6 py-4 rounded-xl shadow-md animate-fadeIn">
           Order Successful! Your order will arrive in 30 minutes.
          <br />
          <span className="font-semibold">Thank you!</span>
        </div>
      )}
    </div>
  );
}

export default Addcart;
