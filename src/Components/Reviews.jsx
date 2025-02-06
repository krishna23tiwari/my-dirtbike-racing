import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <div className="flex justify-center mt-18 mb-2">
        <h1
          className="text-4xl font-bold text-center text-slate-800"
          style={{ fontFamily: "Agdasima" }}
        >
          "Experience the Rush Through Our Customers’ Eyes"
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col bg-gray-300 p-6 shadow-lg border rounded-lg w-full max-w-md relative"
          >
            <div className="absolute -top-5 left-5 bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded-md">
              PRO
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex justify-center items-center">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={review.image}
                  alt="profile-picture"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{review.userName}</h4>
                <p className="text-sm text-gray-600">{review.designation}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">{review.description}</p>
            <div className="flex items-center mt-3">
              <p className="text-yellow-500 text-lg font-bold">{"★".repeat(review.rating)}</p>
              <p className="ml-2 text-gray-600 text-sm">({review.rating}/5)</p>
            </div>
            <p className="text-sm font-semibold text-gray-500 mt-8">Location: {review.location}</p>
            <div className="flex justify-end mt-4">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
