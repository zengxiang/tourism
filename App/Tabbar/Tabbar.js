'use strict';
import React , {Component} from 'react';
import {
    Text ,
    View ,
    Image ,
    TouchableHighlight
} from 'react-native';
import {Router , Actions , Scene} from 'react-native-router-flux';

// components
import TabbarItem from './TabbarItem';

// pages
import Home from './../Home/home';
import HomeDetail from './../Home/homeDetail';

import TravelAdvisory from './../TravelAdvisory/TravelAdvisory'
import TravelAdvisoryDetail from './../TravelAdvisory/TravelAdvisoryDetail'

import Find from './../Find/Find'
import FindDetail from './../Find/FindDetail'

import AirTickets from './../AirTickets/AirTickets'
import AirTicketsDetial from  './../AirTickets/AirTicketsDetial'

export default class TabbarVC extends Component {
    popVC = ()=> {
        Actions.pop();
    }

    render() {
        let rightButton = () => {
            return (
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginRight: 10}}>收藏</Text>
                    <Text>分享</Text>
                </View>
            );
        };
        let renderBackButton = ()=> {
            return (
                <View>
                    <TouchableHighlight onPress={this.popVC}>
                        <View style={{paddingHorizontal: 10 , paddingBottom: 8}}>
                            <Image style={{width: 20 , height: 20}} source={require('../img/icon_back.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
            )
        }

        return (
            <Router key='modal'>
                <Scene key='root'>
                    <Scene key='tabbar' tabs={true} style={{backgroundColor: '#eeeeee'}}>
                        <Scene key='tab1'
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor} title='首页'
                               icon={TabbarItem} idx={0} initial={true}>
                            <Scene
                                key="Home"
                                hideNavBar={true}
                                component={Home}
                                title="首页"
                            />
                            <Scene
                                key="HomeDetail"
                                hideNavBar={false}
                                hideTabBar={true}
                                renderBackButton={renderBackButton}
                                component={HomeDetail}
                                title="首页详情"
                            />
                        </Scene>
                        <Scene key='tab2' title='旅游咨询' icon={TabbarItem} idx={1}
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor}>
                            <Scene
                                key="TravelAdvisory"
                                component={TravelAdvisory}
                                title="旅游咨询"
                            />
                            <Scene
                                key="TravelAdvisoryDetail"
                                component={TravelAdvisoryDetail}
                                hideTabBar={true}
                                title="旅游咨询详情"
                            />
                        </Scene>
                        <Scene key='tab3' title='风景欣赏' icon={TabbarItem} idx={2}
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor}
                               renderRightButton={rightButton}>
                            <Scene
                                key="Find"
                                component={Find}
                                title="风景欣赏"
                            />
                            <Scene
                                key="FindDetail"
                                component={FindDetail}
                                hideTabBar={true}
                                title="风景欣赏详情"
                            />
                        </Scene>
                        <Scene key='tab4' title='机票订购' icon={TabbarItem} idx={3}
                               onLeft={() => alert("Left button!")} leftTitle="Left"
                               onRight={() => alert("Right button")}
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor}
                               rightTitle="Right">
                            <Scene
                                key="AirTickets"
                                component={AirTickets}
                                title="机票订购"
                            />
                            <Scene
                                key="AirTicketsDetial"
                                component={AirTicketsDetial}
                                hideTabBar={true}
                                title="机票订购详情"
                            />


                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

const navStyles = {
    bgColor: {
        backgroundColor: "#333333"
    } ,
    titleColor: {
        color: "white"
    }
}