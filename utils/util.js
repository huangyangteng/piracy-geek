const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 数组中的对象的属性进行比较
// 使用： arr.sotr(untils.compare(property))
const compare = property => {
  return (obj1, obj2) =>
    obj1[property] - obj2[property];
}

module.exports = {
  formatTime: formatTime,
  compare:compare
}
