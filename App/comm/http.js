/**
 * Created by zengxiang on 16/9/6.
 */

'use strict';

let HOST = 'http://dev.soloman.org.cn/API/';

export function PostRequestData(url, body, resolve, reject) {
    fetch(HOST + url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body:  toQueryString(body),
    })
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            resolve(responseData);
        })
        .catch((error) => {
            reject(error);
        });
}

export function GetRequestData(url, body, resolve, reject) {
    console.log(HOST + url +'?'+ toQueryString(body));
    fetch(HOST + url +'?'+ toQueryString(body), {
        method: 'GET',
    }).then((response) => {
            return response.json();
    }).then((responseData) => {
            resolve(responseData);
    }).catch((error) => {
            reject(error);
    });
}


function toQueryString(obj) {
    return obj ? Object.keys(obj).sort().map(function (key) {
        var val = obj[key];
        if (Array.isArray(val)) {
            return val.sort().map(function (val2) {
                return (key) + '=' + (val2);
            }).join('&');
        }
        return (key) + '=' + (val);
    }).join('&') : '';
}

// 需要汉字转码的用下面方法
// function toQueryString(obj) {
//     return obj ? Object.keys(obj).sort().map(function (key) {
//         var val = obj[key];
//         if (Array.isArray(val)) {
//             return val.sort().map(function (val2) {
//                 return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
//             }).join('&');
//         }
//
//         return encodeURIComponent(key) + '=' + encodeURIComponent(val);
//     }).join('&') : '';
// }