// import axios from './config'
import axios from 'axios'

/**
 * 引入 antd-vue的提示方法
 */
import Message from '@/ui/antd-vue-ui'
// 引入qs模块，用来序列化post类型的数据
// import QS from 'qs';


// 创建axios实例
let service = axios.create({
        timeout: 5000, // 请求超时时间
        // application/x-www-form-urlencoded
        // headers: { 'content-type': 'application/json; charset=utf-8' }
    })
    // request拦截器
service.interceptors.request.use(config => {
    // if (store.getters.token) {
    //   config.headers = {
    //     'Authorization' : "Token " + getToken(), //携带权限参数
    //    };
    // }
    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code !== 0) {
            Message.config({
                // duration: 2,
                maxCount: 3,
                duration: 2
            })
            Message.error(res.msg);
            return response.data;
        } else {
            return response.data;
        }
    },
    error => {

        Message.config({
            // duration: 2,
            maxCount: 3,
            duration: 2
        })

        Message.error(res.msg);
        return Promise.reject(error)
    }
)

export default service





/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
// function get(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, {
//             data: JSON.stringify(
//                 params
//             )
//         }).then(res => {
//             resolve(res);
//         }).catch(err => {
//             Message.error(err)
//             reject(err.data)
//         })
//     })
// }

// /** 
//  * post方法，对应post请求 
//  * @param {String} url [请求的url地址] 
//  * @param {Object} params [请求时携带的参数] 
//  */
// function post(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.post(url, QS.stringify(params))
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 Message.error(err)
//                 reject(err.data)
//             })
//     });
// }

// export default {
//     get,
//     post
// }