import React from 'react';
import Aside from '../../components/Aside'
import Item from '../../components/Item'

class Products extends React.Component{
    render(){
        return(
        
            <div className="container" >
                <div className="row">
                    <Aside />
                    
                    <div className="col-sm-9 padding-right">
                        <div className="features_items">
                            <h2 className="title text-center">Sản Phẩm</h2>
                            <div className="col-sm-4">
                                <Item />
                            </div>
                            <div className="col-sm-4">
                                <Item />
                            </div>
                            <div className="col-sm-4">
                                <Item />
                            </div>
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
                        <div class="pagination-area">
                            <ul class="pagination">
                                <li><a href="" class="active">1</a></li>
                                <li><a href="">2</a></li>
                                <li><a href="">3</a></li>
                                <li><a href=""><i class="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* a */}
                </div>
            </div>
            
        )
    }
}

export default Products;