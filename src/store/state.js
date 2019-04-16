let defaultfooterID = '1'
let LandID = ''
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
