import http from './http'

const taobaoExpert = data =>
    http.request({
        method: 'POST',
        url: '/util/taobao',
        data
    })
const getFiles = query =>
    http.request({
        url: '/util/files',
        query
    })
const upload = data =>
    http.request({
        url: '/util/upload',
        data,
        method: 'POST'
    })
export const UTIL_API = {
    taobaoExpert,
    getFiles,
    upload
}
