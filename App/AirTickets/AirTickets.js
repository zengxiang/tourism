/**
 * Created by zengxiang on 16/9/12.
 */

'use strict'
import React , {Component} from 'react';
import {
    Text ,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import TopBigImage from  './../comm/TopBigImage'

export default class AirTickets extends Component {
    constructor(props) {
        super(props);
        this.state = {'containerbgColor':'yellow'};
    }
    _doTapTop =(a)=>{
        this.setState({'containerbgColor':a});
    }


    render() {
        return (
            <View style={[styles.container,{backgroundColor:this.state.containerbgColor}]}>
                <View style={{height: 64}}></View>
                <TopBigImage imgUrl={require('./../img/tu2.png')} bigTitle={this.props.title}
                             subTitle="各种飞机票,火车票,汽车票和轮船票订购服务,"  doTap={this._doTapTop}></TopBigImage>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1 ,
    }
};
