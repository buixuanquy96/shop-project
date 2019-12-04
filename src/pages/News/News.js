import React from 'react';
import Aside from '../../components/Aside'
import Blog from '../../components/Blog'

class News extends React.Component{
    render(){
        return(
            <div>
                <div className="container" >
                    <div className="row">
                        <Aside />
                        
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">Tin Tức</h2>
                                <Blog />
                                <Blog />
                                <Blog />
                                
                                <div className="pagination-area">
                                    <ul className="pagination">
                                        <li><a href="" className="active">1</a></li>
                                        <li><a href="">2</a></li>
                                        <li><a href="">3</a></li>
                                        <li><a href=""><i className="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default News;