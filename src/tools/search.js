import COLUMNS from '../data/columns'
import { isEnglish } from './index'

/**
 * 查找关键字
 * @param {String} searchKey
 */
export function searchEverything(searchKey) {
    //构造正则
    const reg = createReg(searchKey)
    const articles = findArticles(searchKey, reg, 10)
    const columns = findColumns(searchKey, reg, 6)
    console.log(
        'columns.length',
        columns.length,
        'articles.length',
        articles.length
    )
    return [...columns, ...articles]
}

function createReg(searchKey) {
    let searchKeyArr = searchKey.split('')
    let str = '(.*?)'
    let regStr = str + searchKeyArr.join(str) + str
    return RegExp(regStr, 'i')
}

function findColumns(searchKey, reg, total) {
    // 取前10条
    let sum = 0
    let finds = []
    for (let i = 0; i < COLUMNS.length; i++) {
        if (sum === total) break
        //如果输入的都是英文或者数字字符，没有中文
        if (isEnglish(searchKey)) {
            if (reg.test(COLUMNS[i].title_pinyin)) {
                finds.push(COLUMNS[i])
                sum++
            }
        } else {
            //处理中文
            if (COLUMNS[i].title.includes(searchKey)) {
                finds.push(COLUMNS[i])
                sum++
            }
        }
    }
    return finds
}

/**
 * 从文章中查找
 * @param searchKey
 * @param reg
 * @param total
 * @returns {*[]}
 */
function findArticles(searchKey, reg, total) {
    //将所有的专栏列表整理到一起
    const list = COLUMNS.map(item => item.contents).reduce((prev, cur) =>
        prev.concat(cur)
    )
    const articles = list
        .map(item => item.subList)
        .reduce((prev, cur) => prev.concat(cur), [])
    // 取前10条
    let sum = 0
    let finds = []
    for (let i = 0; i < articles.length; i++) {
        if (sum === total) break
        //如果输入的都是英文或者数字字符，没有中文
        if (isEnglish(searchKey)) {
            if (reg.test(articles[i].title_pinyin)) {
                finds.push(articles[i])
                sum++
            }
        } else {
            //处理中文
            if (articles[i].title.includes(searchKey)) {
                finds.push(articles[i])
                sum++
            }
        }
    }
    return finds
}
