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
            className="flex flex-col p-3 bg-white shadow-sm border border-slate-200 rounded-lg w-full"
          >
            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img
                className="w-full h-full object-cover"
                src={
                  review.image ||
                  "https://docs.material-tailwind.com/img/team-3.jpg"
                }
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4
                className="mb-1 text-xl font-semibold text-slate-800"
                style={{ fontFamily: "monospace" }}
              >
                {review.userName}
              </h4>
              <p
                className="text-base text-slate-600 mt-4 mb-3 font-light"
                style={{ fontFamily: "cursive" }}
              >
                {review.description}
              </p>
              <p className="text-sm font-semibold mb-2 text-slate-500 uppercase">
                Rating: {review.rating}
              </p>
              <p className="text-sm font-semibold text-slate-500 uppercase">
                Location: {review.location}
              </p>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-7">
              <button
                className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border 
                border-transparent text-center text-sm text-white transition-all 
                shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none
                 active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none 
                 disabled:opacity-50 disabled:shadow-amber-200"
                type="button"
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
