import http from './http'

const add = data =>
    http.request({
        url: '/note',
        method: 'POST',
        data
    })

const query = id =>
    http.request({
        url: '/note/' + id,
        method: 'GET'
    })
const update = data =>
    http.request({
        url: '/note',
        method: 'PUT',
        data
    })
const del = data =>
    http.request({
        url: '/note/delete',
        method: 'POST',
        data
    })
export const NOTE_API = {
    add,
    query,
    update,
    del
}
