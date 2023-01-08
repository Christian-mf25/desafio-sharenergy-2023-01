import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useCustomers } from "./Providers/Customers/customer.provider";
import Router from "./Routes";
// import { useUser } from "./Providers/Users/user.provider";

function App() {
  const {
    customers,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    oneCustomer,
    getOneCustomer,
  } = useCustomers();

  // const { login, logout } = useUser();

  // const share = {
  //   username: "desafiosharenergy",
  //   password: "sh@r3n3rgy",
  // };

  const newCustomer = {
    name: "Front end",
    email: "front_end@eemail.com",
    phone: "(32)6548-9299",
    address: "Rua dos Bobos",
    cpf: "987.431.436-33",
  };

  const newData = {
    name: "Back end",
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />
      <div>
        <h1>Usuários</h1>
        <ul>
          {customers.map((user) => (
            <>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li>{user.address}</li>
              <li>{user.cpf}</li>
            </>
          ))}
        </ul>

        <button onClick={() => createCustomer(newCustomer)}>
          criar novo cliente
        </button>
        <br />
        <button onClick={() => deleteCustomer(newCustomer.email)}>
          Apagar cliente
        </button>
        <br />
        <button onClick={() => updateCustomer(newData, newCustomer.email)}>
          Atualizar cliente
        </button>
        <br />
        <button onClick={() => getOneCustomer(newCustomer.email)}>
          pegar um cliente
        </button>
        {oneCustomer && (
          <>
            <h4>nome</h4>
            <h6>{oneCustomer.name}</h6>
            <h4>telefone</h4>
            <h6>{oneCustomer.phone}</h6>
            <h4>endereço</h4>
            <h6>{oneCustomer.address} </h6>
          </>
        )}
      </div>
    </>
  );
}

export default App;
