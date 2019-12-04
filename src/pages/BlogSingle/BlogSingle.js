import React from 'react';
import {NavLink} from 'react-router-dom';
import Aside from '../../components/Aside'
class BlogSingle extends React.Component{
    render(){
        return(
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div class="col-sm-9">
                        <div class="blog-post-area">
                            <h2 class="title text-center">Nội Dung</h2>
                            <div class="single-blog-post">
                                <h3>Bài Viết 1</h3>
                                <div class="post-meta">
                                    <ul>
                                        <li><i class="fa fa-user"></i> Tác Giả</li>
                                        <li><i class="fa fa-clock-o"></i> Thời Gian</li>
                                        <li><i class="fa fa-calendar"></i> Ngày Tháng</li>
                                    </ul>
                                    <span>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-o"></i>
                                    </span>
                                </div>
                                <a href="">
                                    <img src="images/blog/blog-one.jpg" alt=""/>
                                </a>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 

                                <p>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 

                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> 

                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <div class="pager-area">
                                    <ul class="pager pull-right">
                                        <li><a href="#">Lùi</a></li>
                                        <li><a href="#">Tiếp</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="rating-area">
                            <ul class="ratings">
                                <li class="rate-this">Đánh giá:</li>
                                <li>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star color"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                                <li class="color">(6 votes)</li>
                            </ul>
                            <ul class="tag">
                                <li>TAG:</li>
                                <li><a class="color" href="">Pink <span>/</span></a></li>
                                <li><a class="color" href="">T-Shirt <span>/</span></a></li>
                                <li><a class="color" href="">Girls</a></li>
                            </ul>
                        </div>

                        <div class="media commnets">
                            <a class="pull-left" href="#">
                                <img class="media-object" src="images/blog/man-one.jpg" alt=""/>
                            </a>
                            <div class="media-body">
                                <h4 class="media-heading">Annie Davis</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div class="blog-socials">
                                    <ul>
                                        <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                        <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                    <a class="btn btn-primary" href="">Bài Viết Khác</a>
                                </div>
                            </div>
                        </div>
                        <div class="response-area">
                            <h2>Phản Hồi</h2>
                            <ul class="media-list">
                                <li class="media">        
                                    <a class="pull-left" href="#">
                                        <img class="media-object" src="images/blog/man-two.jpg" alt=""/>
                                    </a>
                                    <div class="media-body">
                                        <ul class="sinlge-post-meta">
                                            <li><i class="fa fa-user"></i>Tác Giả</li>
                                            <li><i class="fa fa-clock-o"></i>Thời Gian</li>
                                            <li><i class="fa fa-calendar"></i> Ngày Tháng</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <a class="btn btn-primary" href=""><i class="fa fa-reply"></i>Trả Lời</a>
                                    </div>
                                </li>
                                
                            </ul>					
                        </div>
                        <div class="replay-box">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h2>Gửi Phản Hồi</h2>
                                    <form>
                                        <div class="blank-arrow">
                                            <label>Tên Của Bạn</label>
                                        </div>
                                        <span>*</span>
                                        <input type="text" placeholder="Viết tên của bạn"/>
                                        <div class="blank-arrow">
                                            <label>Địa Chỉ Email</label>
                                        </div>
                                        <span>*</span>
                                        <input type="email" placeholder="Viết địa chỉ email của bạn"/>
                        
                                    </form>
                                </div>
                                <div class="col-sm-8">
                                    <div class="text-area">
                                        <div class="blank-arrow">
                                            <label>Nội Dung</label>
                                        </div>
                                        <span>*</span>
                                        <textarea name="message" rows="11"></textarea>
                                        <a class="btn btn-primary" href="">Gửi Phản Hồi</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                    {/* a */}
                </div>
            </div>
        )
    }
}

export default BlogSingle;