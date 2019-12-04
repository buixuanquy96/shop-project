import React from 'react';
import Slider from '../../components/Slider'
import Aside from '../../components/Aside'
import Items from '../../components/Items'

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Slider />
                <div className="container" >
                    <div className="row">
                        <Aside />
                        <Items />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;