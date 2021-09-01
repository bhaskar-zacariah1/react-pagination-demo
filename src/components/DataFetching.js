import React, { useState, useEffect } from "react";
import Users from "./Users";
import Pagination from "./Pagination";
import axios from "axios";
import { USER_PER_PAGE } from "../users/Constants";

function DataFetching() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(" https://reqres.in/api/users?page=2 ");
      setLoading(false);
      setUsers(res.data.data);

      setTotalPages(Math.ceil(res.data.data.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);
  const handleClick = (page) => {
    setPage(page);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-4">
          <h1 className="border-bottom text-success">
            Users List with pagination
          </h1>
          <p className="text-primary mt-3">Page {page}</p>
          {loading ? (
            <p className="text-info">loading...</p>
          ) : (
            <>
              <Users users={users} page={page} />
              <Pagination totalPages={totalPages} handleClick={handleClick} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DataFetching;
