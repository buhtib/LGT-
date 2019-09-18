import request from './index'

export function caselist(start, end, type) {
    return request({
        url: '/api' + '/caselist',
        method: 'post',
        data: {
            start,
            end,
            type
        }
    })
}