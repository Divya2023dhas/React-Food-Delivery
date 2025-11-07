import React, { useState } from "react";

function Login({ onClose }) {
  const [step, setStep] = useState("mobile"); 
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeTab, setActiveTab] = useState("signin");
  const [showPopup, setShowPopup] = useState(false);

  const handleOtpChange = (value, index) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value.replace(/\D/, ""); // only digits
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === "mobile") {
      if (mobile.length === 10) {
        setStep("otp");
      } else {
        alert("Please enter a valid 10-digit number");
      }
    } else if (step === "otp") {
      if (otp.join("").length === 4) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          setStep("mobile");
          setOtp(["", "", "", ""]);
          setMobile("");
          onClose();
        }, 2000);
      } else {
        alert("Please enter a valid 4-digit OTP");
      }
    }
  };

  const handleGuest = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold text-center mb-4 text-orange-500">
          Warner & Spencer
        </h1>

       
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("signin")}
            className={`font-semibold pb-1 ${
              activeTab === "signin"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`font-semibold pb-1 ${
              activeTab === "signup"
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/*  Mobile number */}
          {step === "mobile" && (
            <>
              <label className="block font-medium mb-1">
                Enter your mobile number
              </label>
              <input
                type="tel"
                maxLength="10"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/, ""))}
                placeholder="10-digit mobile number"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600"
              >
                Send OTP
              </button>
            </>
          )}

          {/* OTP entry */}
          {step === "otp" && (
            <>
              <label className="block font-medium mb-1">
                Enter the 4-digit OTP
              </label>
              <div className="flex justify-center gap-3 mb-3">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    className="w-10 h-10 border rounded-lg text-center text-lg focus:ring-2 focus:ring-orange-500"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600"
              >
                Submit
              </button>

              {/* Continue as guest */}
              <div className="text-center mt-3">
                <button
                  type="button"
                  onClick={handleGuest}
                  className="text-sm text-orange-500 hover:underline"
                >
                  Continue as Guest
                </button>
              </div>
            </>
          )}
        </form>

        {/* Popup Message */}
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl">
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl shadow-md text-center">
             Successfully Logged In!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
