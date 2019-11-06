import React, { Component } from 'react';
import { Avatar } from 'antd';

import search from '../icons/search.svg';


class DashboardHeader extends Component {
    state = {  }
    render() { 
        return (   
        <div className="container-fluid border-bottom-0 border-light"> 
          <div class="row dashboard-header">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="d-flex align-items-center" style={{width: "65%"}}>
                <label className="dashboar-name badge-header"> SEC-U </label>
                <label className="badge-primary badge-header" style={{height: "100%"}}> Dashboard </label>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <div >
                <img src={search} className="icons" alt="search" /> 
              </div>   
              <div className="d-flex align-items-center flex-column"  style={{'flex-basis': "25%"}}>
                <strong className=" unset-line-height">Johnwel L. Pol</strong>
                <label className="role unset-line-height">Administrator</label>
              </div>
              <div  class="btn-group" style={{'flex-basis': "10%"}}>
                <div className="d-flex justify-content-around" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{'width': "100%"}}>
                  <Avatar icon="user" />
                  <span>
                    <i class="down-arrow" ></i>
                  </span>
                </div>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div> 
            </div>
          </div>           
        </div>
         );
    }
}
 
export default DashboardHeader;