import React from "react";

const User = ({ user }) => {
  console.log(user);
  return (
    <div className="card-body bg-success m-4">
      <p className="text-white fs-3">{`Full Name: ${user.first_name} ${user.last_name}`}</p>
      <p className="text-white fs-4">{`Email Id: ${user.email}`}</p>
      <img className="img-fluid rounded " src={user.avatar} alt="Faces" />
    </div>
  );
};

export default User;
