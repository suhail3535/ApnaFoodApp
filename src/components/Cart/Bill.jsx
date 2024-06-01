import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Razorpay from "razorpay";

const Bill = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const findTotalAmount = () => {
    let totalAmount = cartItems.reduce((total, item) => {
      const itemPrice = item.card.info.defaultPrice
        ? item.card.info.defaultPrice / 100
        : item.card.info.price / 100;
      return total + itemPrice * item.quantity;
    }, 0);

    // Round to two decimal places
    totalAmount = Math.round(totalAmount * 100) / 100;

    // Convert to string and truncate excess decimal places
    return totalAmount.toFixed(2);
  };

  const handleClick = async () => {
    const totalAmount = findTotalAmount();
alert("working on payment page")
    // const options = {
    //   key: "rzp_test_wH1s30kblY4Mzd",
    //   amount: totalAmount * 100, // Amount in paisa
    //   currency: "INR",
    //   name: "Your Company Name",
    //   description: "Order payment",
    //   image: "https://your-logo-url.com/logo.png",
    //   prefill: {
    //     name: "John Doe",
    //     email: "john@example.com",
    //     contact: "9999999999",
    //   },
    //   handler: function (response) {
    //     console.log(response);
    //     // Handle successful payment
    //     alert("Payment successful. Payment ID: " + response.razorpay_payment_id);
    //   }
    // };

    // try {
    //   const razorpayInstance = new window.Razorpay(options);
    //   razorpayInstance.open();
    // } catch (error) {
    //   console.error("Error initializing Razorpay:", error);
    // }
  };




  return (
    <div className="payment-details-container flex flex-col lg:fixed lg:ml-[65%] lg:w-[30rem] mt-5 p-2">
      <div className="order-summary mb-3 flex border-b-2 p-2 justify-between">
        <span className="flex flex-col">
          <span className="text-2xl font-bold font-Poppins">Order Summary</span>
          <span className="text-green-600">Overall Savings ₹ 0</span>
        </span>
        <span>( {cartItems.length} items )</span>
      </div>

      <div className="order-value-shipping-Product-discount flex flex-col gap-2 mt-1 mb-8 border-b-2 p-2">
        <span className="flex justify-between">
          <span>Order Value</span>
          <span className="font-medium">₹ {findTotalAmount()}</span>
        </span>

        <span className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-500">FREE</span>
        </span>

        <span className="flex justify-between">
          <span>Product Discount</span>
          <span> - ₹ 0</span>
        </span>
      </div>

      <div className="grandTotal  flex flex-col gap-4 my-2">
        <span className="flex justify-between">
          <span className="font-bold text-xl font-Poppins">Grand Total</span>
          <span className="font-semibold text-lg font-Poppins">
            ₹ {findTotalAmount()}
          </span>
        </span>

        <button onClick={handleClick} className="bg-orange-500 hover:bg-orange-600 transition-all p-3 font-bold text-white w-full text-center font-Poppins rounded-sm">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Bill;
