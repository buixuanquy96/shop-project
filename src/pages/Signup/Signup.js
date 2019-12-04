import React from 'react';
import {NavLink} from 'react-router-dom'

class Signup extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="breadcrumbs">
                    <ol className="breadcrumb">
                    <li><NavLink to="/">Trang Chủ</NavLink></li>
                    <li className="active">Đăng Ký</li>
                    </ol>
                </div>

                <div className="row signup">
                    <div className="col-sm-6 col-sm-offset-2">
                        <div className="login-form">
                            <h2>Đăng Ký Tài Khoản</h2>
                            <form action="#" className="signup-form">
                                <input type="text" placeholder="Họ" />
                                <input type="text" placeholder="Tên" />
                                <input type="text" placeholder="Số Điện Thoại" />
                                <input type="text" placeholder="Tài Khoản" />
                                <input type="password" placeholder="Mật Khẩu" />
                                <input type="password" placeholder="Xác Nhận Mật Khẩu" />
                            
                                <button type="submit" className="btn btn-default">Đăng Ký</button>
                                
                                
                            </form>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Signup;