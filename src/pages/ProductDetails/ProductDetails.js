import React from 'react';
import Aside from '../../components/Aside'
import Item from '../../components/Item';

class ProductDetails extends React.Component{
    render(){
        return(
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div class="col-sm-9 padding-right">
                        <div class="product-details">
                            <div class="col-sm-5">
                                <div class="view-product">
                                    <img src="images/product-details/1.jpg" alt="" /> 
                                </div>
                                <div id="similar-product" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <a href=""><img src="images/product-details/similar1.jpg" alt=""/></a>
                                                <a href=""><img src="images/product-details/similar2.jpg" alt=""/></a>
                                                <a href=""><img src="images/product-details/similar3.jpg" alt=""/></a>
                                            </div>
                                            <div class="item">
                                                <a href=""><img src="images/product-details/similar1.jpg" alt=""/></a>
                                                <a href=""><img src="images/product-details/similar2.jpg" alt=""/></a>
                                                <a href=""><img src="images/product-details/similar3.jpg" alt=""/></a>
                                            </div>
                                            
                                            
                                        </div>

                                        
                                        <a class="left item-control" href="#similar-product" data-slide="prev">
                                        <i class="fa fa-angle-left"></i>
                                        </a>
                                        <a class="right item-control" href="#similar-product" data-slide="next">
                                        <i class="fa fa-angle-right"></i>
                                        </a>
                                </div>

                            </div>
                            <div class="col-sm-7">
                                <div class="product-information">
                                    <img src="images/product-details/new.jpg" class="newarrival" alt="" />
                                    <h2>Sản Phẩm A</h2>
                                    <p>ID: xxx</p>
                                    <img src="images/product-details/rating.png" alt="" />
                                    <span>
                                        <span>$59</span>
                                        <label>Số Lượng:</label>
                                        <input type="text" value="3" />
                                        <button type="button" class="btn btn-fefault cart">
                                            <i class="fa fa-shopping-cart"></i>
                                            Thêm Vào Giỏ Hàng
                                        </button>
                                    </span>
                                    <p><b>Tình Trạng:</b> Còn Hàng</p>
                                    <p><b>Trạng Thái:</b> Mới</p>
                                    <p><b>Thương Hiệu:</b> E-SHOPPER</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="reviews">
                            <h2>Bình Luận</h2>
                            <div class="single-blog-post">
                                <div className="post-meta">
                                    <ul>
                                        <li><a href=""><i class="fa fa-user"></i>Tác Giả</a></li>
                                        <li><a href=""><i class="fa fa-clock-o"></i>Thời Gian</a></li>
                                        <li><a href=""><i class="fa fa-calendar-o"></i>Ngày Tháng</a></li>
                                    </ul>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p><b>Viết Bình Luận</b></p>
                                
                                <form action="#" >
                                    <span>
                                        <input type="text" placeholder="Tên Của Bạn"/>
                                        <input type="email" placeholder="Địa Chỉ Email"/>
                                    </span>
                                    <textarea name="" ></textarea>
                                    <b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
                                    <button type="button" class="btn btn-default pull-right">
                                        Gủi Bình Luận
                                    </button>
                                </form>
                            </div>
                        
                        </div>
                        
                        <div class="recommended_items">
                            <h2 class="title text-center">Sản Phẩm Gợi Ý</h2>
                            
                            <div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="item active">	
                                        <div class="col-sm-4">
                                            <Item />
                                        </div>
                                        <div class="col-sm-4">
                                            <Item />
                                        </div>
                                        <div class="col-sm-4">
                                            <Item />
                                        </div>
                                    </div>
                                    <div class="item">	
                                        <div class="col-sm-4">
                                            <Item />
                                        </div>
                                        <div class="col-sm-4">
                                            <Item />
                                        </div>
                                        <div class="col-sm-4">
                                            <Item />
                                        </div>
                                    </div>
                                </div>
                                    <a class="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                                    <i class="fa fa-angle-left"></i>
                                    </a>
                                    <a class="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                                    <i class="fa fa-angle-right"></i>
                                    </a>			
                            </div>
                        </div>
                        
                    </div>
                    {/* a */}
                </div>
            </div>
        )
    }
}

export default ProductDetails;