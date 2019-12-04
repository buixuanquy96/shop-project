import React from 'react';
import {NavLink} from 'react-router-dom';

class Blog extends React.Component{
    render(){
        return(
            <div className="single-blog-post">
                <h3>Tiêu Đề</h3>
                <div className="post-meta">
                    <ul>
                        <li><i className="fa fa-user"></i> Tác giả</li>
                        <li><i className="fa fa-clock-o"></i> Thời gian</li>
                        <li><i className="fa fa-calendar"></i> Ngày Tháng Năm</li>
                    </ul>
                    <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                    </span>
                </div>
                <NavLink to="/blog-single" className="blog-link">
                    <a href="">
                        <img src="images/blog/blog-one.jpg" alt="" />
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn btn-primary" href="">Đọc tiếp</a>
                </NavLink>
                
            </div>
        )
    }
}

export default Blog;