import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import News from './pages/News/News';
import Products from './pages/Products/Products';
import Signup from './pages/Signup/Signup'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BlogSingle from './pages/BlogSingle/BlogSingle';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <Cart />
    },
    {
        path: '/news',
        exact: false,
        main: () => <News />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />
    },
    {
        path: '/products',
        exact: false,
        main: () => <Products />
    },
    {
        path: '/signup',
        exact: false,
        main: () => <Signup />
    },
    {
        path: '/product-details',
        exact: false,
        main: () => <ProductDetails />
    },
    {
        path: '/blog-single',
        exact: false,
        main: () => <BlogSingle />
    },
    {
        path: '/',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;