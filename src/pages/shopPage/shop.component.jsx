import React, {Component} from "react";
import SHOP_DATA  from "./shop.data"



class ShopPage extends Component {

    constructor(props){
        super(props)
        this.state ={
            colloction : SHOP_DATA
        }
    }
    render(){
        return <div>ShopPage</div>
    }

}

export default ShopPage;