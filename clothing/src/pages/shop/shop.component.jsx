import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';
import '../../component/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections:  SHOP_DATA
        }
    }
    render(){
        return <div> SHOP PAGE</div>
    }
}

export default ShopPage;