/**
 * 通过id获取src
 * @param {*} id
 */
export function getAriticleSrcById(contentsList, id) {
    let tmp = contentsList.map(item => item.subList)
    let listAll = tmp.reduce((prev, next) => {
        return prev.concat(next)
    })
    let cur = listAll.find(item => item.id == id)
    return cur.src
}
