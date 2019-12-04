import React from 'react';


class Aside extends React.Component{
    render(){
        return(
            <div className="col-sm-3">
                <div className="left-sidebar">
                    <h2>Thể Loại</h2>
                    <div className="panel-group category-products" id="accordian">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#nam">
                                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                        Thời Trang Nam
                                    </a>
                                </h4>
                            </div>
                            <div id="nam" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                        <li><a href="#">Áo Sơ Mi </a></li>
                                        <li><a href="#">Áo Thun </a></li>
                                        <li><a href="#">Áo Khoác </a></li>
                                        <li><a href="#">Quần</a></li>
                                        <li><a href="#">Giày</a></li>
                                        <li><a href="#">Phụ Kiện</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#nu">
                                        <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                        Thời Trang Nữ
                                    </a>
                                </h4>
                            </div>
                            <div id="nu" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <ul>
                                        <li><a href="#">Váy Đầm</a></li>
                                        <li><a href="#">Áo Sơ Mi</a></li>
                                        <li><a href="#">Áo Thun</a></li>
                                        <li><a href="#">Áo Khoác</a></li>
                                        <li><a href="#">Quần</a></li>
                                        <li><a href="#">Giày</a></li>
                                        <li><a href="#">Đồ Ngủ</a></li>
                                        <li><a href="#">Phụ Kiện</a></li>
            
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a href="#">Thời trang trẻ em</a></h4>
                            </div>
                        </div>
                    </div>
                
                    <div className="brands_products">
                        <h2>Nhãn Hiệu</h2>
                        <div className="brands-name">
                            <ul className="nav flex-column nav-stacked">
                                <li><a href="#"> <span className="pull-right">(50)</span>Nike</a></li>
                                <li><a href="#"> <span className="pull-right">(56)</span>Gucci</a></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="shipping text-center">
                        <img src="images/home/shipping.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Aside;