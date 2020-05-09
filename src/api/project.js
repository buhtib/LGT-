import request from './index'
import QS from 'qs';

export function casetype() {
    return request({
        url: '/casetype',
        method: 'get'
    })
}




export function caselist(data) {
    return request({
        url: '/caselist',
        method: 'post',
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
        data: QS.stringify(data)
    })
}


export function management(params) {
    return request({
        url: '/management',
        method: 'get',
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
        params
    })
}


export function submitInfoForm(data) {
    return request({
        url: '/userSubmitInfo',
        method: 'post',
        headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
        data: QS.stringify(data)
    })
}