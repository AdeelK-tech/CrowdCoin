import React from "react";
import { Menu } from "semantic-ui-react";

const Header=()=>{
    return(
        <Menu style={{marginTop:'10px'}}>
            <Menu.Item><h4>CrowdCoin</h4></Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item><h4>Campaigns</h4></Menu.Item>
            <Menu.Item><h4>+</h4></Menu.Item>

            </Menu.Menu>
        </Menu>
    )
}
export default Header