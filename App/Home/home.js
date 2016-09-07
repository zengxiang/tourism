/**
 * Created by zengxiang on 16/9/5.
 */
'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';
import Button from 'react-native-button';
import {GetScreenWidth, GetScreenHeight, GetListData} from '../comm/PublicAction'
import {Actions} from 'react-native-router-flux';

import {GetRequestData} from '../comm/http';
import List from 'react-native-listview-refresher';
import Swiper from 'react-native-swiper';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _handlePress() {
        Actions.HomeDetail();
    }

    render() {
        return (
            <View>
                <View style={styles.navBg}>
                    <View style={{height: 20}}>
                    </View>
                    <View style={styles.nav}>
                        <Image style={styles.logo} source={require('./../img/logo.png')}/>
                        <Image style={styles.searchBg} source={require('./../img/search_bg.png')}>
                            <TextInput
                                style={styles.searchInput}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </Image>
                    </View>
                </View>
                <List style={styles.container}
                      ref='listView'
                      renderRow={this.renderRow}
                      onFetching={this.fetch}
                      renderHeader={this.renderHeader}
                      pullDownRefreshable={true}
                      pullUpRefreshable={true}
                />
                {/*<Button onPress={Actions.tab2}>跳到消息页面</Button>*/}
                {/*<Button onPress={Actions.HomeDetail}>push Detail</Button>*/}
                {/*<Button*/}
                {/*style={{fontSize: 20, color: 'green'}}*/}
                {/*styleDisabled={{color: 'red'}}*/}
                {/*onPress={this._handlePress}>*/}
                {/*push Detail(方法里跳转)*/}
                {/*</Button>*/}
                {/*<Button onPress={Actions.HomeDetail1}>隐藏nav</Button>*/}
                {/*<Button onPress={Actions.HomeDetail2}>隐藏tab</Button>*/}

            </View>
        )
    }

    fetch = (page = 1, callback, options)=> {
        GetRequestData('', {}, function (responseData) {
            // alert(JSON.stringify(responseData));
            callback(responseData['forecast']['24h']['101010100']['1001001'], {allLoaded: page == 3 ? true : false});
        }, function (error) {
            alert(JSON.stringify(error));
        });
    }

    renderHeader = () => {
        {
            return <HeaderSwiper ></HeaderSwiper>
        }
    }

    renderRow = (data, sectionID, rowID) => {
        return <Cell key={rowID} data={data}></Cell>
    }
}

class HeaderSwiper extends Component {
    render() {
        return (
            <Swiper style={swiperStyles.wrapper} height={200} autoplay={true}
                    onMomentumScrollEnd={function (e, state, context) {
                        console.log('index:', state.index)
                    }}
                    dot={<View style={{
                        backgroundColor: 'rgba(255,255,255,.2)',
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        margin: 3,
                    }}/>}
                    activeDot={<View style={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        margin: 3,
                    }}/>}
                    paginationStyle={{
                        bottom: 0, left: null, right: 10
                    }} loop={true}>
                <View style={swiperStyles.slide}>
                    <Image style={swiperStyles.image}
                           source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}}/>
                </View>
                <View style={swiperStyles.slide}>
                    <Image style={swiperStyles.image}
                           source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}}>
                        <Text numberOfLines={1} style={{color:'white'}}>Big lie behind Nine’s new show</Text>
                    </Image>
                </View>
                <View style={swiperStyles.slide}>
                    <Image style={swiperStyles.image}
                           source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}}/>
                </View>
                <View style={swiperStyles.slide}>
                    <Image style={swiperStyles.image}
                           source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}}/>
                </View>
            </Swiper>
        )
    }
}

class Cell extends Component {
    render() {
        return (
            <View style={{height: 100, width: 300}}>
                <Text>index=={this.props.data['003']}</Text>
            </View>
        )
    }
}
const styles = {
    navBg: {
        height: 64,
        backgroundColor: '#333333',
    },
    nav: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        height: 44,
        resizeMode: Image.resizeMode.contain,
    },
    searchBg: {
        width: GetScreenWidth() - 44 - 70,
        height: 30,
        resizeMode: Image.resizeMode.contain,

    },
    searchInput: {
        borderColor: 'white',
        height: 30,
        paddingHorizontal: 10,
    },
    container: {
        height: GetScreenHeight() - 64 - 44
    },

};

const swiperStyles = {
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1
    }
}