
import React from "react";

const Card = ({ val }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
      <img
        src={val.images?.[0]}
        alt={val.title}
        className="h-52 w-full object-contain bg-slate-50 p-4"
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-slate-800">
            {val.title}
          </h2>

          <span className="shrink-0 rounded bg-yellow-100 px-2 py-1 text-sm">
            ⭐ {val.rating}
          </span>
        </div>

        <p className="mt-3 text-sm text-slate-600">
          {val.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-indigo-600">
            ${val.price}
          </h3>

          <button
            type="button"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={() => console.log("Added to cart:", val.title)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
