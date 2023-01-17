import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/AdminPage/Admin'
import Users from '../Pages/AdminPage/Users'
import AdminProducts from '../Pages/AdminPage/Products'
import Checkout from '../Pages/Authentication/Checkout'
import SignIn from '../Pages/Authentication/SignIn'
import SignUp from '../Pages/Authentication/SignUp'
import Home from '../Pages/LandingPage/Home'
import Products from '../Pages/Products/Products'
import CartPage from '../Pages/SinglePage/CartPage'
import SingleProduct from '../Pages/SinglePage/SingleProduct'
import Navbar from './Navbar'
import NotFound from './NotFound'
import Orders from '../Pages/AdminPage/Orders'
import AddProduct from '../Pages/AdminPage/AddProduct'

function MainRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/sigin' element={<SignIn />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/products/:id' element={<SingleProduct />}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/admin' element={<Admin />}></Route>
                <Route path='/admin/users' element={<Users />}></Route>
                <Route path='/admin/products' element={<AdminProducts />}></Route>
                <Route path='/admin/orders' element={<Orders />}></Route>
                <Route path='/admin/addProduct' element={<AddProduct />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>
    )
}

export default MainRoutes
