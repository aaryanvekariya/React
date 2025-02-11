import React from 'react'

export default function UserList() {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];
  return (
    <>
      <h1>User List</h1>
      <table border={1}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
        {users.map((user) =>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>
        ))}
      </table>
    </>
  )
}
