import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import star from '../icons/star.svg';
import dollar from '../icons/dollar.svg';
import usage from '../icons/usage.svg';
import safety from '../icons/safety.svg';
import people from '../icons/people.svg';
import availability from '../icons/availability.svg';
import delivery from '../icons/delivery.svg';

import '../asset/css/navbar.css';

class Navbar extends Component {
  state = {
    current: 'mail',
    menus: [
      {menuName: "Solutions" , icon: star, notif: 1},
      {menuName: "Cost" , icon: dollar, notif: 0},
      {menuName: "Usage" , icon: usage, notif: 2},
      {menuName: "Safety" , icon: safety, notif: 0},
      {menuName: "People" , icon: people, notif: 3},
      {menuName: "Availability" , icon: availability, notif: 5},
      {menuName: "Delivery" , icon: delivery, notif: 0},
    ]
  };

  hasNotif(notif){

    if (notif == 0) {
      return ''
    }

    return <span class="badge badge-pill badge-danger">{notif}</span>
  }


  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        { this.state.menus.map(( menu ) => 
          <Menu.Item key = { menu.menuName }>
            <div class = "inline-div ">
              <img src={menu.icon} className="icons" alt="star" />            
              <span class = "badge-notification">
                {this.hasNotif(menu.notif)}
              </span>
            </div>
            <span> {menu.menuName} </span>
          </Menu.Item>
        ) }
      </Menu>
    );
  }
}
 
export default Navbar;