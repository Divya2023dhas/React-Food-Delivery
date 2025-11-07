import React, { useState } from "react";

function Feedback() {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setSubmitted(true);
      setComment("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="bg-white border-2 border-gray-300 rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
           Write a Comment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your feedback here..."
            className="w-full h-32 border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <p className="text-center text-green-700 mt-4 font-medium">
        Thank you for your feedback!
          </p>
        )}
      </div>
    </div>
  );
}

export default Feedback;