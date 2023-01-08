import axios from "axios";

const APICustomers = axios.create({
  baseURL: "//localhost:4000/api/",
});

export default APICustomers;
