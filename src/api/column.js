import COLUMN_LIST from '../data/columns'
// import http from './http'
const getAllColumns = () => {
    return new Promise(resolve => {
        resolve(COLUMN_LIST)
    })
}

export const COLUMN_API = {
    getAllColumns
}
