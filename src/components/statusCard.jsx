import React, { Component } from 'react';

import { Col } from 'antd';

class StatusCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            status: {
                success: 100,
                warning: 15,
                danger: 50
            }
         }
    }

    renderStatusCount(status) {
        console.log(status);
        // return (
        //     <div className="ant-col-8">
        //         <p className="chart-text text-danger">{this.props.title}</p>
        //         <p className="">Danger</p>
        //     </div>
        // )
       
    }


    computePercentage = (divisor) => {
        const dividend = this.sum(this.props.status);
        let quo = (divisor/dividend)*100;
        quo = Math.round(quo * 100) / 100;
        
        return quo;
    }


    sum = ( obj ) => {
        var sum = 0;
        for( var el in obj ) {
            if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
            }
        }
        return sum;
    }

    render() { 
        return ( 
            <Col span={8} >
                <div className="card container card-body">
                    <div className="ant-col ant-col-24">
                        <p class="float-left d-card-title"> {this.props.title} </p>
                    </div>
                    <div className="chart-layout">
                    {/* `${this.props.size}px` */}
                        <div className="chart-success " style={{width: `${this.computePercentage(this.props.status.success)}%`}}></div>
                        <div className="chart-warning " style={{width: `${this.computePercentage(this.props.status.warning)}%`}}></div>
                        <div className="chart-danger " style={{width: `${this.computePercentage(this.props.status.danger)}%`}}></div>

                    </div>
                    <div className="">
                        <p></p>
                        <div className="ant-col-8">
                            <p className="chart-text text-success">{this.props.status.success}</p>
                            <p className="">Success</p>
                        </div>
                        <div className="ant-col-8">
                            <p className="chart-text text-warning">{this.props.status.warning}</p>
                            <p className="">Warning</p>
                        </div>
                        <div className="ant-col-8">
                            <p className="chart-text text-danger">{this.props.status.danger}</p>
                            <p className="">Danger</p>
                        </div>
                    </div>
                </div>
            </Col>
         );
    }
}

export default StatusCard;