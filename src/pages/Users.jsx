
import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { UserCard } from "../components/UserCard";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axiosInstance.get("/users");
      setUsers(response.data.users);
    } catch (error) {
      setError(error.message || "Failed to fetch users");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1 className="p-6 text-center">Loading Users...</h1>;
  }

  if (error) {
    return (
      <p className="p-6 text-center text-red-600">
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        Users
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((val) => (
          <UserCard key={val.id} val={val} />
        ))}
      </div>
    </div>
  );
};

export default Users;
