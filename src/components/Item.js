import React from 'react';
import {NavLink} from 'react-router-dom'

class Item extends React.Component{
    render(){
        return(
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center img-prod">
                        <NavLink to="/product-details" className="product-link">
                            <img src="images/home/product1.jpg" alt="" />
                            <h2>$5</h2>
                            <p>Tên Sản Phẩm</p>
                        </NavLink>
                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Thêm vào giỏ hàng</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;