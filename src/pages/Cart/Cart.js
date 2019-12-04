import React from 'react';
import {NavLink} from 'react-router-dom'

class Cart extends React.Component{
    render(){
        return(
            <div id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                        <li><NavLink to="/">Trang Chủ</NavLink></li>
                        <li className="active">Giỏ Hàng</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Sản Phẩm</td>
                                    <td className="description"></td>
                                    <td className="price">Giá</td>
                                    <td className="quantity">Số Lượng</td>
                                    <td className="total">Tổng Tiền</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart_product">
                                        <a href=""><img src="images/cart/one.png" alt=""/></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href="">Tên Sản Phẩm</a></h4>
                                        <p>ID: xxx</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href=""> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue="1" autoComplete="off" size="2"/>
                                            <a className="cart_quantity_down" href=""> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href=""><i className="fa fa-times"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            
                {/* cart */}
            </div>
        )
    }
}

export default Cart;