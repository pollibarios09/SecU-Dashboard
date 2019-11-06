import React, { Component } from 'react';
import { Row, Col } from 'antd';
import kpiBackground from '../asset/images/kpi-background.svg';
import StatusCard from './statusCard';
import { fbase } from '../base.js';
import "../asset/css/inline-chart.css";

import { Progress } from 'antd';



class DashboardContent extends Component {

    constructor (){
        super();
        this.state = {
            dashboard: {},
            percentage: 50
        }
    }

    addItem(newItem){
        this.setState({
            dashboard: this.state.dashboard.concat([newItem]) //updates Firebase and the local state
        });
      }

    componentWillMount() {
        this.dashboardRef = fbase.syncState('Dashboard', {
            context: this,
            state: 'dashboard'
        });        

        const min = 40;
        const max = 100;
        let randomizer = Math.floor(min + Math.random() * (max - min));
        console.log(randomizer);

        this.interval = setInterval(() => this.setState({ percentage: randomizer }), 1000);
    }

    componentWillUnmount() {
        fbase.removeBind(this.dashboardRef);
        clearInterval(this.interval);
    }

    render() { 
        return (
            <div className="container">
                <div className="d-flex align-items-center" style={{height: "78px"}}>
                    <div class="content-title">Summary</div>
                </div>
                {console.log(this.state.dashboard)}
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <div class="card">
                            <div class="card-body" >
                                <p class="text-left d-card-title">Alert Management</p>
                                <div class="row">
                                    <div className="col-lg-5 col-sm-12 kpi-model">
                                        <img src={kpiBackground} alt="" height="150px" width= "150px" />
                                        <div className="kpi-meter">
                                            <p class="d-flex justify-content-center font-weight-bold text-sm">140 KPI</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-sm-12">
                                        <div className="float-left mt-3">
                                            <div className="col-12 mb-2">
                                                <a href="#" class="badge badge-success">70%</a>
                                                <span className="ml-2">
                                                    Success<small class="text-muted">(140 KPI)</small>
                                                </span>
                                            </div>
                                            <div className="col-12 mb-2">
                                                <a href="#" class="badge badge-warning">20%</a>
                                                <span className="ml-2">
                                                    Warning<small class="text-muted">(140 KPI)</small>
                                                </span>
                                            </div>
                                            <div className="col-12 mb-2">
                                                <a href="#" class="badge badge-danger">10%</a>
                                                <span className="ml-2">
                                                    Danger<small class="text-muted">(140 KPI)</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12} >
                        <div class="card">
                            <div class="card-body">
                                <p class="text-left d-card-title">Status</p>

                                <Progress type="dashboard" percent={this.state.percentage} 
                                    strokeColor={this.state.percentage < 70 ?  this.state.percentage < 50? "#F02E18" : "#FDC203" :"#14D633"} />
                                <div>
                                    <strong className="d-block">
                                        <label class="text-muted">                                        
                                        {this.state.percentage < 70 ? this.state.percentage < 50? "UnHealthy" : "Fair" : "Healthy"}
                                    </label></strong>
                                   <small className="d-block"><label class="text-muted">With faded secondary text</label></small> 
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <StatusCard title="Status"  status={{success:"1", warning:"0", danger:"1"}} />
                    <StatusCard title="Status"  status={{success:"4", warning:"1", danger:"1"}} />
                    <StatusCard title="Status"  status={{success:"1", warning:"0", danger:"0"}} />
                    <StatusCard title="Status"  status={{success:"2", warning:"0", danger:"0"}} />

                    <StatusCard title="Status"  status={{success:"2", warning:"1", danger:"0"}} />
                    <StatusCard title="Status"  status={{success:"3", warning:"2", danger:"0"}} />
                    <StatusCard title="Status"  status={{success:"1", warning:"6", danger:"3"}} />


                </Row>
            </div>
          );
    }
}
 
export default DashboardContent;