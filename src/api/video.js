import http from './http'
import { getParams } from '../tools'

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
const run = path =>
    http.request({
        method: 'POST',
        url: '/watch/run',
        data: getParams({ dir: path })
    })

export const WATCH_API = {
    getList,
    run,
    query
}
