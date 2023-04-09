import React from "react";

const User = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, email } = curUser;
        const { street, city, zipcode } = curUser.address;
        return (
          <tr key={curUser.id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              {street},{city},{zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default User;
