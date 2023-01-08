import React, { useEffect, useState } from "react";
import API from "./Services/api";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);

  useEffect(() => {
    const getAllUsers = async () => {
      let usersArray = await API.get("/customers");
      console.log(usersArray);
      setUsers(usersArray.data);
    };
    getAllUsers();
  }, []);

  return (
    <>
      <div>
        <h1>Usuários</h1>
        <ul>
          {users.map((user) => (
            <>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.address}</li>
              <li>{user.cpf}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
