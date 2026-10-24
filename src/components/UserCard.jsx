

export const UserCard = ({ val }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}
      <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

      {/* User Profile */}
      <div className="-mt-12 flex flex-col items-center px-6 pb-6">
        <img
          src={val.image}
          alt={`${val.firstName} ${val.lastName}`}
          className="h-24 w-24 rounded-full border-4 border-white bg-white object-cover shadow-md"
        />

        <h2 className="mt-3 text-xl font-bold text-slate-800">
          {val.firstName} {val.lastName}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          @{val.username}
        </p>

        <span className="mt-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {val.role || val.company?.title || "User"}
        </span>

        {/* User Details */}
        <div className="mt-6 w-full space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <span className="text-lg">✉️</span>
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Email</p>
              <p className="truncate text-sm font-medium text-slate-700">
                {val.email}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
            <div>
              <p className="text-xs text-slate-500">Age</p>
              <p className="font-semibold text-slate-700">
                {val.age}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Gender</p>
              <p className="font-semibold capitalize text-slate-700">
                {val.gender}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs text-slate-500">Company</p>
            <p className="mt-1 font-semibold text-slate-700">
              {val.company?.name || "Not available"}
            </p>
            <p className="text-sm text-slate-500">
              {val.company?.title || "No designation"}
            </p>
          </div>
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={() => console.log("Selected user:", val.id)}
          className="mt-5 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};


