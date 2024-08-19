import HomePage from "./views/HomePage"
import Product from "./views/Product"
import ShoppingCart from "./views/ShoppingCart"
import { Routes,Route } from "react-router-dom"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shoppingCart" element={<ShoppingCart/>}/>
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}
export default App