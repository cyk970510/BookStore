// 底部nav显示在哪个页面
// 哪个页面变红色
let defaultfooterID = '1'
// 存储登录成功之后的 用户名
let LandID = ''
// 控制我的页面中
// 显示登录/注册  还是显示 登录成功的信息
let isShow = false

try {
  if (localStorage.footID) {
    defaultfooterID = localStorage.footID
  }
} catch (e) {
}

export default {
  footerID: defaultfooterID,
  LandID: LandID,
  isShow: isShow
}
