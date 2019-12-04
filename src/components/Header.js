import React from 'react'
import Logo from '../images/home/logo.png';

import { Route, NavLink } from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
            <header id="header">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href="#"><i className="fa fa-phone"></i> +84 12 34 56 789</a></li>
                                        <li><a href="#"><i className="fa fa-envelope"></i> xxx@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav nav-pills">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="logo pull-left">
                                    <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
                                </div>
                            
                            </div>
                            <div className="col-sm-8">
                                <div className="shop-menu pull-right">
                                    <ul className="nav nav-pills">
                                        <li><NavLink to="/products"><i className="fa fa-user"></i> Sản Phẩm</NavLink></li>
                                        
                                        <li><NavLink to="/checkout"><i className="fa fa-crosshairs"></i> Thanh Toán</NavLink></li>
                                        <li><NavLink to="/cart"><i className="fa fa-shopping-cart"></i> Giỏ Hàng</NavLink></li>
                                        <li>
                                            <NavLink to="/login"><i className="fa fa-lock"></i> Đăng Nhập</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li><NavLink to="/" className="active">Trang Chủ</NavLink></li>
                                        <li className="dropdown"><a>Danh Mục Sản Phẩm<i className="fa fa-angle-down"></i></a>
                                            <ul role="menu" className="sub-menu">
                                                <li><NavLink to="/products">Sản Phẩm</NavLink></li> 
                                                <li><NavLink to="/checkout">Thanh Toán</NavLink></li> 
                                                <li><NavLink to="/cart">Giỏ Hàng</NavLink></li> 
                                                <li>
                                                    <NavLink to="/login">Đăng Nhập</NavLink>
                                                </li> 
                                            </ul>
                                        </li> 
                                        <li><NavLink to="/news">Tin Tức</NavLink>
                                
                                        </li> 
                                        
                                        <li><NavLink to="/contact">Liên Hệ</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="search_box pull-right">
                                    <input type="text" placeholder="Tìm kiếm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </header>
        )
    }
}

export default Header;