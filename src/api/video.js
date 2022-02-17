import http from './http'

const getList = params =>
    http.request({
        url: '/watch',
        params
    })
const query = params =>
    http.request({
        url: '/watch/query',
        params
    })
const run = () =>
    http.request({
        url: '/watch/run'
    })
export const WATCH_API = {
    getList,
    run,
    query
}
