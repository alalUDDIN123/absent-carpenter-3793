import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/AdminPage/Admin'
import Users from '../Pages/AdminPage/Users'
import AdminProducts from '../Pages/AdminPage/Products'
import Checkout from '../Pages/Authentication/Checkout'
import Home from '../Pages/LandingPage/Home'
import Products from '../Pages/Products/Products'
import CartPage from '../Pages/SinglePage/CartPage'
import SingleProduct from '../Pages/SinglePage/SingleProduct'
import Navbar from './Navbar'
import NotFound from './NotFound'
import Orders from '../Pages/AdminPage/Orders'
import AddProduct from '../Pages/AdminPage/AddProduct'
import Footer from './Footer'
import UserDetails from '../Pages/AdminPage/UserDetails'



function MainRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products/:key' element={<Products />}></Route>
                <Route path='/products/:key/:id' element={<SingleProduct />}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/admin/dashboard' element={<Admin />}></Route>
                <Route path='/admin/users' element={<Users />}></Route>
                <Route path='/admin/users/:id' element={<UserDetails/>}></Route>
                <Route path='/admin/products' element={<AdminProducts />}></Route>
                <Route path='/admin/orders' element={<Orders />}></Route>
                <Route path='/admin/addProduct' element={<AddProduct />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default MainRoutes
