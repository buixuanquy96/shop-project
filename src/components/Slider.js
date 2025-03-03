import React from 'react';

class Slider extends React.Component{
    render(){
        return(
            <div id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active "></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Mua Sắm Mọi Lúc - Mọi Nơi</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            
                                            <button type="button" className="btn btn-warning">Bắt đầu</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl1.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png"  className="pricing" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Mua Sắm Mọi Lúc - Mọi Nơi</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Bắt đầu</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png"  className="pricing" alt="" />
                                        </div>
                                    </div>
                                    
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Mua Sắm Mọi Lúc - Mọi Nơi</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="">Bắt đầu</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl3.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png" className="pricing" alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <a href="#myCarousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#myCarousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
	
        )
    }
}

export default Slider;