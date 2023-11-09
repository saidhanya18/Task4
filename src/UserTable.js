// UserTable.js

import React, { useEffect, useState } from 'react';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error('Data is not in the expected format:', data);
        }
      })
      .catch(error => console.error('Error fetching user data: ' + error));
  }, []);
  

  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
