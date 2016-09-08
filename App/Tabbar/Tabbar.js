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

// import Page2 from './page2';
// import Page3 from './page3';
export default class TabbarVC extends Component {
    _renderBackButton() {
        return <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 10}}>收藏</Text>
        </View>
    }

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
                        <View style={{paddingHorizontal:10,paddingBottom:8}}>
                            <Image style={{width:20,height:20}}  source={require('../img/icon_back.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
            )
        }

        return (
            <Router key='modal'>
                <Scene key='root'>
                    <Scene key='tabbar' tabs={true} style={{backgroundColor: '#eeeeee'}}>
                        <Scene key='tab1' renderBackButton={this._renderBackButton}
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
                                renderBackButton={renderBackButton}
                                hideNavBar={false}
                                component={HomeDetail}
                                title="首页详情"
                            />
                            <Scene
                                key="HomeDetail1"
                                hideNavBar={false}
                                component={HomeDetail}
                                title="首页详情"
                            />
                        </Scene>
                        <Scene key='tab2' component={Home} title='消息' icon={TabbarItem} idx={1}
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor}/>
                        <Scene key='tab3' component={Home} title='发现' icon={TabbarItem} idx={2}
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor}
                               renderRightButton={rightButton}/>
                        <Scene key='tab4' component={Home} title='我的' icon={TabbarItem} idx={3}
                               onLeft={() => alert("Left button!")} leftTitle="Left"
                               onRight={() => alert("Right button")}
                               navigationBarStyle={navStyles.bgColor} titleStyle={navStyles.titleColor}
                               rightTitle="Right"/>
                    </Scene>
                </Scene>

                {/*//公共页面最好这写这里 方便重用*/}
                <Scene
                    key="Page1_2"
                    component={HomeDetail}
                    title="Page1_1"
                />
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