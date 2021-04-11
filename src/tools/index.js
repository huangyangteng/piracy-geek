export function uid() {
    var dt = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
        c
    ) {
        var r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
}
export function formatDuration(time) {
    let min = Math.floor(time / 60) % 60
    let sec = Math.floor(time % 60)
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec
    return min + ':' + sec
}
export function getElementTop(element) {
    let actualTop = element.offsetTop
    let current = element.offsetParent
    while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
    }
    return actualTop
}
export function getElementLeft(element) {
    let actualLeft = element.offsetLeft
    let current = element.offsetParent
    while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
    }
    return actualLeft
}
export function copyToBoard(value) {
    console.log('copyToBoard -> value', value)
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.setAttribute('value', value)
    input.select()

    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(input)
        return true
    }
    document.body.removeChild(input)
    return false
}

/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容 二进制流的形式
 */
export function downloadFile(content, name) {
    if (typeof name == 'undefined') {
        throw new Error('The first parameter name is a must')
    }
    if (typeof content == 'undefined') {
        throw new Error('The second parameter content is a must')
    }
    // if (typeof content != 'string') {
    //     throw new Error('The second parameter content must be a string')
    // }
    let eleLink = document.createElement('a')
    eleLink.download = name
    eleLink.style.display = 'none'
    let blob = new Blob([content])
    eleLink.href = URL.createObjectURL(blob)
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
}

import axios from 'axios'
//提供一个link，完成文件下载，link可以是  http://xxx.com/xxx.xls
export function downloadByLink(link, fileName) {
    axios
        .request({
            url: link,
            responseType: 'blob'
        })
        .then(res => {
            downloadFile(res.data, fileName)
        })
}
