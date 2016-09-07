/**
 * Created by zengxiang on 16/9/6.
 */
'use strict';
import Dimensions from 'Dimensions';

export  function GetScreenWidth() {
    return Dimensions.get('window').width;
}

export  function GetScreenHeight() {
    return Dimensions.get('window').height;
}

export function GetListData() {
    var obj = {
        "api":"GetCommentList",
        "v":"1.0",
        "code":"0",
        "msg":"success",
        "data":[{
            "username":"jiangqq",
            "nickname":"张三",
            "content":"这家店的菜还是不错的,推荐推荐",
            "createTime":"2016-08-22 12:34:12",
            "icon":"",
            "imgs":[
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_1.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_2.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_3.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_4.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_5.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_6.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_7.jpg"}
            ]
        },{
            "username":"jiangqq",
            "nickname":"张三",
            "content":"这家店的菜还是不错的,推荐推荐",
            "createTime":"2016-08-22 12:34:12",
            "icon":"",
            "imgs":[
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_1.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_2.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_3.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_4.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_5.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_6.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_7.jpg"}
            ]
        },{
            "username":"jiangqq",
            "nickname":"张三",
            "content":"这家店的菜还是不错的,推荐推荐",
            "createTime":"2016-08-22 12:34:12",
            "icon":"",
            "imgs":[
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_1.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_2.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_3.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_4.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_5.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_6.jpg"},
                {"imgUrl":"http://mta.zttit.com:8080/images/mall/top_7.jpg"}
            ]
        }]
    }


    return obj;
}