import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

const Users: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <h1>Nome: {user.name}</h1>
      <br />
      <h1>Nome: {user.email}</h1>
    </div>
  );
};

export default Users;
