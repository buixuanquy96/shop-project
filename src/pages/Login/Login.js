import React from 'react';
import {NavLink} from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li className="active">Đăng Nhập</li>
                    </ol>
                </div>
                <div className="row login">
                    <div className="col-sm-4 col-sm-offset-1">
                        <div className="login-form">
                            <h2>Đăng Nhập Tài Khoản</h2>
                            <form action="#">
                                <input type="text" placeholder="Tài Khoản" />
                                <input type="password" placeholder="Mật Khẩu" />
                                <span>
                                    <input type="checkbox" className="checkbox"/> 
                                    Ghi nhớ mật khẩu
                                </span>
                                <button type="submit" className="btn btn-default">Đăng Nhập</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                        <div className="signup-form">
                            <h2>Bạn Chưa Có Tài Khoản</h2>
                            <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn!</p>
                            
                            <NavLink to="/signup" className="btn btn-default" role="button">Đăng Ký</NavLink>
                        </div>
                    </div>

                </div>
                

            </div>
        )
    }
}

export default Login;