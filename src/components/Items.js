import React from 'react';
import Item from './Item';

class Items extends React.Component{
    render(){
        return(
            <div className="col-sm-9 padding-right">
                <div className="features_items">
                    <h2 className="title text-center">sản phẩm nổi bật</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <Item />
                        </div>
                        <div className="col-sm-4">
                            <Item />
                        </div>
                        <div className="col-sm-4">
                            <Item />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Item />
                        </div>
                        <div className="col-sm-4">
                            <Item />
                        </div>
                        <div className="col-sm-4">
                            <Item />
                        </div>
                    </div>
                    
				</div>


                <div className="recommended_items" >
                    <h2 className="title text-center">Sản phẩm khuyến mãi</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="col-sm-4">
                                    <Item />
                                </div>
                                <div className="col-sm-4">
                                    <Item />
                                </div>
                                <div className="col-sm-4">
                                    <Item />
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-sm-4">
                                    <Item />
                                </div>
                                <div className="col-sm-4">
                                    <Item />
                                </div>
                                <div className="col-sm-4">
                                    <Item />
                                </div>
                            </div>
                        </div>
                        <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Items;