
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage'
import DashboardPage from "../pages/DashboardPage";
import InventoryPage from "../pages/InventoryPage";
import OrdersPage from "@/pages/OrdersPage";
import Pospage from "@/pages/POSPage";
import Productspage from "@/pages/ProductsPage";
import Reportspage from "@/pages/ReportsPage";


export default function AppRoutes(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/inventory" element={<InventoryPage/>}/>
      <Route path="/orders" element={<OrdersPage/>} />
      <Route path="/pos" element={<Pospage/>}/>
      <Route path="/products" element={<Productspage/>} />
      <Route path="/reports" element={<Reportspage/>} />
    

     </Routes>
    </BrowserRouter>
  )
}
