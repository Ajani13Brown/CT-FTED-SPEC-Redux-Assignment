import CreateUser from "./views/CreateUser"
import HomePage from "./views/HomePage"
import Login from "./views/Login"
import Product from "./views/Product"
import ShoppingCart from "./views/ShoppingCart"
import { Routes,Route, useNavigate } from "react-router-dom"
import UpdateUser from "./views/UpdateUser"
import DeleteUser from "./views/DeleteUser"


const App = () => {

  const token = sessionStorage.getItem('authToken');
  const Navigate = useNavigate();

  
  const ProtectedRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="/shoppingCart" element={token ? <ShoppingCart /> : <Navigate to="/login" />} />
  <Route path="/createUser" element={<CreateUser />} />
  <Route path="/login" element={<Login />} />
  <Route path="/updateUser" element={token ? <UpdateUser /> : <Navigate to="/login" />} />
  <Route path="/deleteUser" element={token ? <DeleteUser /> : <Navigate to="/login" />} />
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

  )
}
export default App