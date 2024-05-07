import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddProduct from "./pages/dashboard/AddProduct";
import Dashbaord from "./pages/dashboard/Dashbaord";



const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Products />}></Route>
                <Route path="/dashboard" element={<Dashbaord />}></Route>
                <Route path="/dashboard/add" element={<AddProduct />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App