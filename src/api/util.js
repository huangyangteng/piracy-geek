import http from './http'

const taobaoExpert = data =>
    http.request({
        method: 'POST',
        url: '/util/taobao',
        data
    })

export const UTIL_API = {
    taobaoExpert
}
